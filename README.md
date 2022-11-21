# Map Relative

A small utility package born from a niche usecase.  
In the majority of cases you would not need this package, see if this package suits your needs instead: [`maprange`](https://www.npmjs.com/package/@anselan/maprange)

- [Examples](#examples)
- [Options](#options)
- [Notes](#notes)
- [TODO](#todo)

## Examples

The very basic and only usage (using default linear easing & no clamping):
```js
import { mapRelative } from '@kyunwang/maprelative';

// Returns 1 - due to looping
// Once clamping is supported, it will stop at 3
mapRelative(2, [0, 2], [1, 3]);

// Returns 5
mapRelative(2.5, [0, 3], [1, 3, 2, 8]);

// Returns -0.9535759475583964
mapRelative(7.8, [2, 19], [9, -1, 33, 12]);
```

## Options

| Name		| Type		   | Default	   | Required |
| --------- | ------------ | ------------- | -------- |
| easing    | `function`   | (t) => t      | No       |
<!-- | clamp     | `boolean`    | false         | No       | -->


## Notes
- By default the result is looping, enable the `clamp: true` to prevent the looping.
- Overwrite the `easing` option with methods from e.g. the [`eases`](https://www.npmjs.com/package/eases) package.


## TODO
Todos before I deem it v1 (even though it's just one method)

- [ ] support Clamping 
- [ ] edgecase checking
- [ ] small demo page
- [ ] Add optional seamless looping behaviour (currently jump restarts back to index 0 at progression `1`)