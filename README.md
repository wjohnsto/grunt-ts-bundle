# grunt-ts-bundle
===============

A grunt task for running [ts-bundle](https://github.com/Platypi/ts-bundle)

## Example

```js
grunt.initConfig({
  bundle: {
    main: {
        rootModule: 'plat',
        license: './license.txt',
        version: '<%= pkg.version %>',
        src: './index.html',
        dest: [
            './out.ts'
        ]
    }
  }
});

grunt.loadNpmTasks('grunt-ts-bundle');
```