// https://astexplorer.net/
// Elegir javascript, babel-eslint y transform eslint v4

// Ejemplo de regla a crear
const pi = 3.14159;
const half_pi = 1.57075;
// Variables constantes
// Variables que guarden un numero

// El nombre de la variable tiene que estar en UPPERCASE

export default function (context) {
    return {
        VariableDeclaration(node) {
            // tipo de variable const
            if (node.kind === 'const') {
                const declaration = node.declarations[0];

                // asegurarnos que el valor es un numero
                if (typeof declaration.init.value === 'number') {
                    if (declaration.id.name !== declaration.id.name.toUpperCase()) {
                        context.report({
                            node: declaration.id,
                            message: 'El nombre de la constante debe estar en mayúsculas',
                            fix: function (fixer) {
                                return fixer.replaceText(
                                    declaration.id,
                                    declaration.id.name.toUpperCase()
                                );
                            },
                        });
                    }
                }
            }
        },
    };
}

// Lo que devuelve

// Lint rule not fired.

// Fixed output follows:
// --------------------------------------------------------------------------------
const PI = 3.14159;
const HALF_PI = 1.57075;
// Variables constantes
// Variables que guarden un numero

// El nombre de la variable tiene que estar en UPPERCASE
