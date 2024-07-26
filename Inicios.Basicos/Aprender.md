```markdown
# Datos en JavaScript

## Datos Primitivos

Se accede directamente al valor:
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `NaN`

## Datos Compuestos

Se accede a la referencia del valor:
- `object = {}`
- `array = []`
- `function = ()`
- `class = {}`

---

## Método `forEach`

En JavaScript, cuando utilizas el método `forEach` de un array, la función de callback que pasas recibe automáticamente los argumentos en un orden específico, definido por el lenguaje. Este orden es:

1. El valor del elemento actual.
2. El índice del elemento actual.
3. El array completo que está siendo recorrido (opcional y menos usado).

Por lo tanto, no importa cómo nombres estos parámetros, siempre recibirán los valores en este orden.

### Orden de los Parámetros en `forEach`

La función de callback que pasas a `forEach` recibe tres parámetros en el siguiente orden:

1. **El Valor del Elemento Actual**: El valor del elemento que está siendo procesado en el array.
2. **El Índice del Elemento Actual**: El índice (posición) del elemento actual en el array.
3. **El Array Completo**: El array completo sobre el cual se está llamando `forEach`.

---

## Diferencia entre el uso de `const` y `let` para declarar objetos

En JavaScript, `const` y `let` son dos maneras de declarar variables, pero tienen diferencias importantes en cuanto a su comportamiento, especialmente cuando se trata de objetos.

### `const` (constante)

- **Inmutabilidad de la Referencia**: Cuando declaras una variable con `const`, la referencia a la variable no puede ser reasignada. Esto significa que no puedes cambiar a qué objeto está apuntando la variable una vez que ha sido asignada.
- **Mutabilidad del Contenido**: Aunque la referencia a la variable es constante, el contenido del objeto (sus propiedades) puede ser modificado.

```javascript
const obj = { nombre: 'Juan', edad: 30 };

// Esto es válido
obj.nombre = 'Pedro';
console.log(obj); // { nombre: 'Pedro', edad: 30 }

// Esto no es válido y lanzará un error
obj = { nombre: 'Ana', edad: 25 }; // TypeError: Assignment to constant variable.
```

En este ejemplo, puedes cambiar las propiedades del objeto `obj`, pero no puedes reasignar `obj` a un nuevo objeto.

### `let` (variable)

- **Mutabilidad de la Referencia**: Cuando declaras una variable con `let`, la referencia a la variable puede ser reasignada. Esto significa que puedes cambiar a qué objeto está apuntando la variable.
- **Mutabilidad del Contenido**: Al igual que con `const`, el contenido del objeto (sus propiedades) puede ser modificado.

```javascript
let obj = { nombre: 'Juan', edad: 30 };

// Esto es válido
obj.nombre = 'Pedro';
console.log(obj); // { nombre: 'Pedro', edad: 30 }

// Esto también es válido
obj = { nombre: 'Ana', edad: 25 };
console.log(obj); // { nombre: 'Ana', edad: 25 }
```

En este ejemplo, puedes cambiar las propiedades del objeto `obj` y también puedes reasignar `obj` a un nuevo objeto.

### Resumen de Diferencias

- **`const`**:
  - La referencia a la variable no puede ser reasignada.
  - Las propiedades del objeto pueden ser modificadas.
- **`let`**:
  - La referencia a la variable puede ser reasignada.
  - Las propiedades del objeto pueden ser modificadas.

### Uso Práctico

Usar `const` es una buena práctica cuando sabes que la referencia a la variable no debería cambiar. Esto puede ayudar a prevenir errores accidentales donde la referencia del objeto es cambiada inesperadamente.

Usar `let` es apropiado cuando necesitas que la referencia de la variable pueda ser reasignada a un nuevo objeto en algún punto del código.

### Ejemplos Adicionales

#### Usando `const` con Objetos

```javascript
const persona = {
  nombre: 'Juan',
  edad: 30
};

// Cambiando una propiedad
persona.edad = 31; // Válido
console.log(persona.edad); // 31

// Reasignando el objeto (no válido)
persona = {
  nombre: 'Pedro',
  edad: 25
}; // Error: Assignment to constant variable.
```

#### Usando `let` con Objetos

```javascript
let persona = {
  nombre: 'Juan',
  edad: 30
};

// Cambiando una propiedad
persona.edad = 31; // Válido
console.log(persona.edad); // 31

// Reasignando el objeto (válido)
persona = {
  nombre: 'Pedro',
  edad: 25
};
console.log(persona); // { nombre: 'Pedro', edad: 25 }
```

En resumen, la elección entre `const` y `let` depende de si necesitas que 
la referencia a la variable pueda cambiar o no.
```


