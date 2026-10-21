#!/usr/bin/env node
/*
 * checker_ET1.js — Comprobador de la entrega ET1 (Interfaces de Usuario 2026-2027)
 *
 * Uso:
 *   node checker_ET1.js ./ET1_IU262712          (directorio ya descomprimido del .rar)
 *   node checker_ET1.js ./ET1_IU262712 --search (exige también tests SEARCH)
 *   node checker_ET1.js                          (busca un ET1_IUxxxxxx en el directorio actual)
 *
 * Qué comprueba:
 *   1. Entrega: nombre del directorio, ET1_IUxxxxxx.js y la variable datosgenerales,
 *      y que exista <entidad>_tests.js para cada tabla.
 *   2. Definición de tests (<entidad>_def_tests): estructura de 9 columnas, numeración
 *      secuencial, campos, elementos, acciones, resultado esperado y mensaje, y que cada
 *      campo tenga todas las validaciones que exige su formato en ADD y EDIT.
 *   3. Pruebas (<entidad>_pruebas): estructura de 7 columnas, numeración, que apunten a un
 *      test existente del mismo campo y acción, que el resultado coincida con el del test,
 *      que todo test tenga al menos una prueba y que el valor probado provoque realmente
 *      el fallo (o el éxito) que dice provocar.
 *
 * Las reglas de cada campo están en CAMPOS (más abajo): si el profesor os ha aclarado
 * algo distinto (p. ej. si las descripciones admiten acentos), se cambia ahí.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ============================ CONFIGURACIÓN ============================

const REQUIERE_SEARCH = process.argv.includes('--search');
const ACCIONES_OBLIGATORIAS = REQUIERE_SEARCH ? ['ADD', 'EDIT', 'SEARCH'] : ['ADD', 'EDIT'];
const ACCIONES_PERMITIDAS = ['ADD', 'EDIT', 'SEARCH', 'DELETE', 'SHOWCURRENT'];
const ELEMENTOS = ['input', 'file', 'select', 'checkbox', 'radio', 'textarea', 'hidden', 'date', 'email', 'password', 'tel', 'number'];
const VALIDACIONES_CONOCIDAS = [
  'min_size', 'max_size', 'format', 'personalized', 'valid',
  'exist_file', 'min_size_name_file', 'max_size_name_file', 'format_name_file', 'type_file', 'max_size_file',
];

// Clases de caracteres
const ACENTOS = 'ÁÉÍÓÚáéíóúÜü';
const PUNTUACION = ' .,;:¡!¿?()"\'\\-';

const letraDni = (s) => {
  const m = /^(\d{8})([A-Za-z])$/.exec(s);
  return !!m && 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(m[1], 10) % 23] === m[2].toUpperCase();
};
const fechaReal = (s) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (!m) return false;
  const d = +m[1], mo = +m[2], y = +m[3];
  const f = new Date(y, mo - 1, d);
  return f.getFullYear() === y && f.getMonth() === mo - 1 && f.getDate() === d && f <= new Date();
};

/*
 * Para cada campo:
 *   min, max      tamaños
 *   re            expresión del formato
 *   pers          función de validación personalizada (si la hay)
 *   requeridas    validaciones que deben tener test en cada acción
 *   recomendadas  validaciones cuya ausencia sólo genera aviso
 *   autoinc       PK autoincremental: en ADD de su propia tabla no se introduce
 */
const ID = { min: 1, max: 11, re: /^\d+$/, requeridas: ['min_size', 'max_size', 'format', 'valid'] };
const TEXTO_N = (min, max) => ({ min, max, re: new RegExp(`^[A-Za-zÑñ]+$`), requeridas: ['min_size', 'max_size', 'format', 'valid'] });
const DESCRIP = { min: 5, max: 200, re: new RegExp(`^[A-Za-zÑñ${PUNTUACION}]+$`), requeridas: ['min_size', 'max_size', 'format', 'valid'] };
const NOMBRE_P = (min, max) => ({ min, max, re: new RegExp(`^[A-Za-zÑñ${ACENTOS}. \\-]+$`), requeridas: ['min_size', 'max_size', 'format', 'valid'] });

const CAMPOS = {
  dni: { min: 9, max: 9, re: /^\d{8}[A-Z]$/, parcial: /^\d{0,8}[A-Z]?$/, pers: letraDni, requeridas: ['min_size', 'max_size', 'format', 'valid'], recomendadas: ['personalized'] },
  nombre_persona: NOMBRE_P(2, 45),
  apellidos_persona: NOMBRE_P(3, 100),
  fechaNacimiento_persona: { min: 10, max: 10, re: /^\d{2}\/\d{2}\/\d{4}$/, parcial: /^[\d\/]*$/, pers: fechaReal, requeridas: ['format', 'valid'], recomendadas: ['personalized'] },
  direccion_persona: { min: 10, max: 200, re: new RegExp(`^[A-Za-z0-9Ññ${ACENTOS}.;/ \\-]+$`), requeridas: ['min_size', 'max_size', 'format', 'valid'] },
  telefono_persona: { min: 9, max: 9, re: /^[6789]\d{8}$/, parcial: /^\d*$/, requeridas: ['min_size', 'max_size', 'format', 'valid'] },
  email_persona: { max: 45, re: /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/, parcial: /^[A-Za-z0-9._%+\-@]*$/, requeridas: ['max_size', 'format', 'valid'] },
  foto_persona: {
    file: true, minNombre: 3, maxNombre: 15, maxBytes: 2 * 1024 * 1024,
    reNombre: /^[A-Za-z.]+\.(jpg|jpeg)$/i, tipos: ['image/jpeg', 'image/jpg'],
    textoSearch: { max: 15, re: /^[A-Za-z.]+$/ },   // en SEARCH es un input con el nombre guardado
    requeridas: ['min_size_name_file', 'max_size_name_file', 'format_name_file', 'type_file', 'max_size_file'],
    recomendadas: ['exist_file', 'valid'],
  },
  id_accion: ID,
  nombre_accion: TEXTO_N(5, 48),
  descrip_accion: DESCRIP,
  id_funcionalidad: ID,
  nombre_funcionalidad: TEXTO_N(5, 48),
  descrip_funcionalidad: DESCRIP,
  id_rol: ID,
  rol_name: { min: 5, max: 48, re: /^[A-Za-z]+$/, requeridas: ['min_size', 'max_size', 'format', 'valid'] },
  rol_description: DESCRIP,
  usuario: { min: 5, max: 45, re: /^[A-Za-z]+$/, requeridas: ['min_size', 'max_size', 'format', 'valid'] },
  contrasena: { min: 8, max: 45, re: /^[A-Za-z]+$/, requeridas: ['min_size', 'max_size', 'format', 'valid'] },
};

// Entidades (tablas) y sus campos; autoinc = PK autoincremental de esa tabla
const ENTIDADES = {
  accion: { campos: ['id_accion', 'nombre_accion', 'descrip_accion'], autoinc: 'id_accion' },
  funcionalidad: { campos: ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'], autoinc: 'id_funcionalidad' },
  funcionalidad_accion: { campos: ['id_funcionalidad', 'id_accion'] },
  persona: { campos: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona'] },
  rol: { campos: ['id_rol', 'rol_name', 'rol_description'], autoinc: 'id_rol' },
  rolaccionfuncionalidad: { campos: ['id_funcionalidad', 'id_accion', 'id_rol'] },
  usuario: { campos: ['dni', 'usuario', 'contrasena', 'id_rol'] },
};

// ============================ INFORME ============================

const color = process.stdout.isTTY;
const c = (n, s) => (color ? `\x1b[${n}m${s}\x1b[0m` : s);
const informe = { entrega: [], def: [], pruebas: [], avisos: [] };
const err = (cat, msg) => informe[cat].push(msg);
const aviso = (msg) => informe.avisos.push(msg);
const fmt = (v) => { try { return JSON.stringify(v); } catch { return String(v); } };

// Ejecuta el fichero en un contexto aislado y devuelve las variables pedidas
// (funciona tanto con let/const/var como con asignación sin declarar).
function cargar(fichero, nombres) {
  const codigo = fs.readFileSync(fichero, 'utf8').replace(/^\uFEFF/, '');
  const ctx = vm.createContext({});
  const salida = nombres.map((n) => `${JSON.stringify(n)}: (typeof ${n} !== 'undefined' ? ${n} : undefined)`).join(',');
  vm.runInContext(`${codigo}\n;globalThis.__salida__ = {${salida}};`, ctx, { timeout: 3000, filename: path.basename(fichero) });
  return ctx.__salida__;
}

// ============================ VALIDACIÓN DE VALORES ============================

const base = (campo) => campo.replace(/^nuevo_/, '');

// Devuelve las validaciones atómicas que FALLA un valor para un campo
function fallos(spec, v, acc) {
  if (acc === 'SEARCH') {
    // En búsqueda se admite vacío o valor parcial: sólo cuentan max_size y los caracteres permitidos
    if (spec.file) spec = spec.textoSearch;
    const s = v === undefined || v === null ? '' : String(v);
    const f = [];
    if (spec.max !== undefined && s.length > spec.max) f.push('max_size');
    const rp = spec.parcial || new RegExp(spec.re.source.replace(/\+\$$/, '*$'), spec.re.flags);
    if (!rp.test(s)) f.push('format');
    return f;
  }
  if (spec.file) {
    if (v === undefined || v === null || v === '' || (typeof v === 'object' && Object.keys(v).length === 0)) return acc === 'EDIT' ? [] : ['exist_file'];
    if (typeof v !== 'object') return ['?'];
    const f = [];
    const nombre = v.format_name_file ?? v.name ?? v.nombre ?? v.min_size_name_file ?? v.max_size_name_file;
    const tipo = v.type_file ?? v.type;
    const tam = v.max_size_file ?? v.size;
    if (typeof nombre === 'string') {
      if (nombre.length < spec.minNombre) f.push('min_size_name_file');
      if (nombre.length > spec.maxNombre) f.push('max_size_name_file');
      if (!spec.reNombre.test(nombre)) f.push('format_name_file');
    }
    if (tipo !== undefined && !spec.tipos.includes(String(tipo).toLowerCase())) f.push('type_file');
    if (tam !== undefined && Number(tam) > spec.maxBytes) f.push('max_size_file');
    return f;
  }
  const s = v === undefined || v === null ? '' : String(v);
  const f = [];
  if (spec.min !== undefined && s.length < spec.min) f.push('min_size');
  if (spec.max !== undefined && s.length > spec.max) f.push('max_size');
  if (spec.re && !spec.re.test(s)) f.push('format');
  if (spec.pers && spec.re && spec.re.test(s) && !spec.pers(s)) f.push('personalized');
  return f;
}

// ============================ COMPROBACIONES ============================

function comprobarDatosGenerales(dir, codigo) {
  const fichero = path.join(dir, `ET1_${codigo}.js`);
  if (!fs.existsSync(fichero)) return err('entrega', `Falta el fichero ET1_${codigo}.js`);
  let d;
  try { d = cargar(fichero, ['datosgenerales']).datosgenerales; } catch (e) {
    return err('entrega', `ET1_${codigo}.js no se puede ejecutar: ${e.message}`);
  }
  if (!d || typeof d !== 'object') return err('entrega', `ET1_${codigo}.js no define la variable "datosgenerales"`);
  if (!d.Lider) err('entrega', 'datosgenerales no tiene la clave "Lider"');
  for (const [k, v] of Object.entries(d)) {
    if (k !== 'Lider' && !/^Participante\d+$/.test(k)) aviso(`datosgenerales: clave "${k}" no es Lider ni ParticipanteN`);
    if (!Array.isArray(v) || v.length !== 3) { err('entrega', `datosgenerales.${k} debe ser [ApellidosNombre, Entrega, horasdedicadas]`); continue; }
    const [nombre, entrega, horas] = v;
    if (typeof nombre !== 'string' || !nombre.trim()) err('entrega', `datosgenerales.${k}: ApellidosNombre vacío`);
    if (typeof entrega !== 'string' || !/ET1/i.test(entrega)) aviso(`datosgenerales.${k}: Entrega = ${fmt(entrega)} (¿no debería ser "ET1"?)`);
    if (typeof horas !== 'number' || !(horas > 0)) err('entrega', `datosgenerales.${k}: horasdedicadas debe ser un número > 0 (es ${fmt(horas)})`);
  }
}

function comprobarEntidad(dir, entidad) {
  const conf = ENTIDADES[entidad];
  const fichero = path.join(dir, `${entidad}_tests.js`);
  const tag = `[${entidad}]`;
  if (!fs.existsSync(fichero)) return err('entrega', `Falta el fichero ${entidad}_tests.js`);

  const vDef = `${entidad}_def_tests`, vPru = `${entidad}_pruebas`;
  let vars;
  try { vars = cargar(fichero, [vDef, vPru]); } catch (e) {
    return err('entrega', `${entidad}_tests.js no se puede ejecutar: ${e.message}`);
  }
  const defs = vars[vDef], pruebas = vars[vPru];
  if (!Array.isArray(defs)) err('entrega', `${entidad}_tests.js no define el array "${vDef}"`);
  if (!Array.isArray(pruebas)) err('entrega', `${entidad}_tests.js no define el array "${vPru}"`);
  if (!Array.isArray(defs)) return;

  // ---- Definiciones de test ----
  const porNumero = new Map();
  const vistos = new Set();
  const duplicados = new Set();
  defs.forEach((fila, i) => {
    const p = `${tag} def_tests fila ${i + 1}`;
    if (!Array.isArray(fila) || fila.length !== 9) return err('def', `${p}: debe tener 9 elementos (tiene ${Array.isArray(fila) ? fila.length : typeof fila})`);
    const [ent, campo, elem, num, desc, val, acc, res, msg] = fila;
    if (ent !== entidad) err('def', `${p}: entidad "${ent}" ≠ "${entidad}"`);
    const cb = base(String(campo));
    const spec = CAMPOS[cb];
    if (!conf.campos.includes(cb)) err('def', `${p}: campo "${campo}" no pertenece a ${entidad}`);
    if (!ELEMENTOS.includes(elem)) err('def', `${p}: elemento de formulario "${elem}" no válido`);
    else if (spec && spec.file && elem !== 'file' && acc !== 'SEARCH') err('def', `${p}: el campo ${campo} es un fichero, el elemento debe ser 'file'`);
    else if (spec && !spec.file && elem === 'file') err('def', `${p}: el campo ${campo} no es un fichero, no debe usar 'file'`);
    if (num !== i + 1) err('def', `${p}: número de test ${fmt(num)}, se esperaba ${i + 1} (secuencial desde 1)`);
    if (typeof desc !== 'string' || !desc.trim()) err('def', `${p}: descripción vacía`);
    if (!VALIDACIONES_CONOCIDAS.includes(val)) aviso(`${p}: validación "${val}" no estándar`);
    if (!ACCIONES_PERMITIDAS.includes(acc)) err('def', `${p}: acción "${acc}" no válida`);
    if (val === 'valid') {
      if (res !== true) err('def', `${p}: un test 'valid' debe esperar true (tiene ${fmt(res)})`);
    } else if (typeof res !== 'string' || !res.endsWith('_ko')) {
      err('def', `${p}: resultado esperado debe ser 'campo_validacion_ko' (tiene ${fmt(res)})`);
    } else if (val === 'personalized' ? !res.startsWith(`${campo}_`) : res !== `${campo}_${val}_ko`) {
      aviso(`${p}: resultado ${fmt(res)}; por convenio sería '${campo}_${val}_ko'`);
    }
    if (typeof msg !== 'string' || !msg.trim()) err('def', `${p}: mensaje al usuario vacío`);
    const clave = `${cb}|${acc}|${val}`;
    const claveDup = val === 'personalized' ? `${clave}|${res}` : clave;
    if (duplicados.has(claveDup)) aviso(`${p}: test duplicado (${campo}, ${acc}, ${val})`);
    vistos.add(clave);
    duplicados.add(claveDup);
    if (Number.isInteger(num)) porNumero.set(num, { campo, cb, val, acc, res, pruebas: 0 });
  });

  // ---- Cobertura: cada campo con todas sus validaciones en cada acción ----
  for (const cb of conf.campos) {
    const spec = CAMPOS[cb];
    for (const acc of ACCIONES_OBLIGATORIAS) {
      if (acc === 'ADD' && conf.autoinc === cb) continue; // PK autoincremental: no se introduce al añadir
      const req = acc === 'SEARCH' ? ['max_size', 'format'] : spec.requeridas;
      for (const val of req) {
        if (!vistos.has(`${cb}|${acc}|${val}`)) err('def', `${tag} falta test ${acc} '${val}' para ${cb}`);
      }
      if (acc !== 'SEARCH') {
        for (const val of spec.recomendadas || []) {
          if (val === 'exist_file' && acc !== 'ADD') continue;
          if (!vistos.has(`${cb}|${acc}|${val}`)) aviso(`${tag} recomendado: test ${acc} '${val}' para ${cb}`);
        }
      }
    }
  }

  // ---- Pruebas ----
  if (!Array.isArray(pruebas)) return;
  pruebas.forEach((fila, i) => {
    const p = `${tag} prueba fila ${i + 1}`;
    if (!Array.isArray(fila) || fila.length !== 7) return err('pruebas', `${p}: debe tener 7 elementos (tiene ${Array.isArray(fila) ? fila.length : typeof fila})`);
    const [ent, campo, numDef, numPrueba, acc, valores, res] = fila;
    if (ent !== entidad) err('pruebas', `${p}: entidad "${ent}" ≠ "${entidad}"`);
    if (numPrueba !== i + 1) err('pruebas', `${p}: número de prueba ${fmt(numPrueba)}, se esperaba ${i + 1} (secuencial desde 1)`);
    const d = porNumero.get(numDef);
    if (!d) return err('pruebas', `${p}: referencia al test ${fmt(numDef)}, que no existe`);
    d.pruebas++;
    if (campo !== d.campo) err('pruebas', `${p}: campo "${campo}" ≠ campo del test ${numDef} ("${d.campo}")`);
    if (acc !== d.acc) err('pruebas', `${p}: acción ${acc} ≠ acción del test ${numDef} (${d.acc})`);
    if (res !== d.res) err('pruebas', `${p}: resultado ${fmt(res)} ≠ resultado del test ${numDef} (${fmt(d.res)})`);
    if (!valores || typeof valores !== 'object' || Array.isArray(valores)) return err('pruebas', `${p}: los valores deben ser un objeto {atributo: valor}`);
    if (!(campo in valores) && d.val !== 'exist_file' && !(CAMPOS[d.cb] && CAMPOS[d.cb].file && d.acc === 'EDIT')) err('pruebas', `${p}: el objeto de valores no contiene el atributo "${campo}"`);

    // ¿El valor provoca de verdad lo que dice el test?
    const spec = CAMPOS[d.cb];
    if (!spec) return;
    const f = fallos(spec, valores[campo], d.acc);
    // En campos de longitud fija (o nombres de fichero) fallar el tamaño implica fallar el formato
    const inevitable = ((spec.min !== undefined && (spec.min === spec.max || spec.min === 1)) || spec.file) && f.every((x) => x === d.val || x === 'format' || x === 'format_name_file');
    const v = fmt(valores[campo]);
    if (d.val === 'valid') {
      if (f.length) aviso(`${p}: test ${numDef} espera éxito, pero ${v} falla en: ${f.join(', ')}`);
    } else if (VALIDACIONES_CONOCIDAS.includes(d.val)) {
      if (!f.includes(d.val)) aviso(`${p}: test ${numDef} espera fallo '${d.val}', pero ${v} no lo provoca${f.length ? ` (falla en: ${f.join(', ')})` : ' (es válido)'}`);
      else if (f.length > 1 && !inevitable) aviso(`${p}: ${v} falla en varias validaciones a la vez (${f.join(', ')}); mejor un valor que falle sólo en '${d.val}'`);
    }
  });
  for (const [num, d] of porNumero) {
    if (d.pruebas === 0) err('pruebas', `${tag} el test ${num} (${d.campo}, ${d.acc}, ${d.val}) no tiene ninguna prueba`);
  }
}

// ============================ PRINCIPAL ============================

function main() {
  const arg = process.argv.slice(2).find((a) => !a.startsWith('--'));
  let dir = arg;
  if (!dir) {
    const cand = fs.readdirSync('.').filter((n) => /^ET1_IU\d{6}$/.test(n) && fs.statSync(n).isDirectory());
    if (!cand.length) { console.error('Uso: node checker_ET1.js <directorio ET1_IUxxxxxx>'); process.exit(2); }
    dir = cand[0];
  }
  if (/\.rar$/i.test(dir)) { console.error('Descomprime primero el .rar y pasa el directorio ET1_IUxxxxxx.'); process.exit(2); }
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) { console.error(`No existe el directorio ${dir}`); process.exit(2); }

  const nombreDir = path.basename(path.resolve(dir));
  const m = /^ET1_(IU\d{6})$/.exec(nombreDir);
  if (!m) err('entrega', `El directorio se llama "${nombreDir}"; debe ser ET1_IU seguido de 6 dígitos (p. ej. ET1_IU262712)`);
  const codigo = m ? m[1] : nombreDir.replace(/^ET1_/, '');

  comprobarDatosGenerales(dir, codigo);
  for (const e of Object.keys(ENTIDADES)) comprobarEntidad(dir, e);

  const esperados = new Set([`ET1_${codigo}.js`, ...Object.keys(ENTIDADES).map((e) => `${e}_tests.js`)]);
  for (const f of fs.readdirSync(dir)) if (!esperados.has(f)) aviso(`Fichero no esperado en la entrega: ${f}`);

  // ---- Salida ----
  const seccion = (titulo, lista, col) => {
    console.log(`\n${c('1', titulo)} (${lista.length})`);
    if (!lista.length) console.log(c('32', '  ✔ sin problemas'));
    lista.forEach((x) => console.log(c(col, '  ✘ ') + x));
  };
  console.log(c('1', `Checker ET1 — ${nombreDir}`) + `  (acciones exigidas: ${ACCIONES_OBLIGATORIAS.join(', ')})`);
  seccion('ENTREGA (obligatorio: cualquier fallo aquí = 0)', informe.entrega, '31');
  seccion('DEFINICIÓN DE TESTS (-0,1 por error)', informe.def, '31');
  seccion('PRUEBAS (-0,1 por error)', informe.pruebas, '31');
  console.log(`\n${c('1', 'AVISOS')} (${informe.avisos.length}) — revisar, no tienen por qué ser errores`);
  informe.avisos.forEach((x) => console.log(c('33', '  ! ') + x));

  const desc = (informe.def.length + informe.pruebas.length) * 0.1;
  console.log('\n' + c('1', 'RESUMEN'));
  if (informe.entrega.length) console.log(c('31', `  La entrega incumple ${informe.entrega.length} requisito(s) obligatorio(s): la nota sería 0.`));
  console.log(`  Errores en tests: ${informe.def.length} · Errores en pruebas: ${informe.pruebas.length} · Descuento estimado: -${desc.toFixed(1)}`);
  process.exit(informe.entrega.length + informe.def.length + informe.pruebas.length ? 1 : 0);
}

main();
