# @commercetools-uikit/data-table

## 10.27.0

### Minor Changes

- [`c205a95`](https://github.com/commercetools/ui-kit/commit/c205a954198c006c39a6257b7a56941ff249f84b) [#1426](https://github.com/commercetools/ui-kit/pull/1426) Thanks [@jonnybel](https://github.com/jonnybel)! - Fixed footer growing inside a horizontal scroll along with the table body. It now remains fixed in place, as a block below the table with the same width.

### Patch Changes

- [`018096d`](https://github.com/commercetools/ui-kit/commit/018096d3e5f4f33d1a5929e0b3f408baf5ce65b7) [#1436](https://github.com/commercetools/ui-kit/pull/1436) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency lodash to v4.17.19 [security]

* [`f74c8c3`](https://github.com/commercetools/ui-kit/commit/f74c8c3ea248bff2ad832d11fd8b9b8cbfed194d) [#1428](https://github.com/commercetools/ui-kit/pull/1428) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* Updated dependencies [[`018096d`](https://github.com/commercetools/ui-kit/commit/018096d3e5f4f33d1a5929e0b3f408baf5ce65b7)]:
  - @commercetools-uikit/accessible-button@10.27.0
  - @commercetools-uikit/secondary-icon-button@10.27.0
  - @commercetools-uikit/hooks@10.27.0

## 10.24.0

### Minor Changes

- [`b85140d`](https://github.com/commercetools/ui-kit/commit/b85140de203fcd66ea428ac671e3a856b4dba8f8) [#1406](https://github.com/commercetools/ui-kit/pull/1406) Thanks [@NickDevG](https://github.com/NickDevG)! - adding collapse state to column renderItem and table itemRenderer functions

* [`8ff2d83`](https://github.com/commercetools/ui-kit/commit/8ff2d83ef383cd4a39ff5530f76bebb89355ab3a) [#1420](https://github.com/commercetools/ui-kit/pull/1420) Thanks [@jonnybel](https://github.com/jonnybel)! - Adds the `headerIcon` prop to columns, which allows adding an Icon or IconButton to the left of the column header label

### Patch Changes

- [`895769b`](https://github.com/commercetools/ui-kit/commit/895769bddccbb652d84df4e0ff0fc3e0341ecef9) [#1425](https://github.com/commercetools/ui-kit/pull/1425) Thanks [@jonnybel](https://github.com/jonnybel)! - Properly update row collapsed state when `isTruncated` options are adjusted for whole row

- Updated dependencies [[`f845d56`](https://github.com/commercetools/ui-kit/commit/f845d567ebe26642cff4f2a89d157fb8ba8f3e8e), [`7d3349e`](https://github.com/commercetools/ui-kit/commit/7d3349efd2915c76d41f01ff8783887f510f9cf7)]:
  - @commercetools-uikit/icons@10.24.0
  - @commercetools-uikit/secondary-icon-button@10.24.0

## 10.23.0

### Minor Changes

- [`50d4dfc`](https://github.com/commercetools/ui-kit/commit/50d4dfc0a198de64ad6d8e9ef70af8970409eb7f) [#1386](https://github.com/commercetools/ui-kit/pull/1386) Thanks [@jonnybel](https://github.com/jonnybel)! - make the footer become sticky when scrolling inside the table

* [`12d0c3f`](https://github.com/commercetools/ui-kit/commit/12d0c3f0391d819147f0c9e915d8fe94711f9421) [#1363](https://github.com/commercetools/ui-kit/pull/1363) Thanks [@jonnybel](https://github.com/jonnybel)! - Allow users to adjust column size by dragging the header edge with a mouse.

- [`b3ba23f`](https://github.com/commercetools/ui-kit/commit/b3ba23fb2a350d7850453d61abace2639bae7a4f) [#1388](https://github.com/commercetools/ui-kit/pull/1388) Thanks [@jonnybel](https://github.com/jonnybel)! - replaces prop `cellAlignment` with `horizontalCellAlignment` and adds new prop `verticalCellAlignment`

### Patch Changes

- [`7429c62`](https://github.com/commercetools/ui-kit/commit/7429c62978cdea1bf0b8340c9240870027c4563c) [#1405](https://github.com/commercetools/ui-kit/pull/1405) Thanks [@jonnybel](https://github.com/jonnybel)! - fixes getHasTableBeenResized to ensure it returns a boolean

* [`4ae6e0d`](https://github.com/commercetools/ui-kit/commit/4ae6e0d7c98c18ae4e9c49d541335fcac3f87e43) [#1387](https://github.com/commercetools/ui-kit/pull/1387) Thanks [@jonnybel](https://github.com/jonnybel)! - fix column resizer taking extra space

- [`e1db5d6`](https://github.com/commercetools/ui-kit/commit/e1db5d627fd521c59c2408a2c19bf3c6206896e2) [#1380](https://github.com/commercetools/ui-kit/pull/1380) Thanks [@mohib0306](https://github.com/mohib0306)! - Improve table row expand/collapse functionlity's accessibility

* [`e906fb7`](https://github.com/commercetools/ui-kit/commit/e906fb7d0e0d7fea0f1d014038333584d6aaa97a) [#1403](https://github.com/commercetools/ui-kit/pull/1403) Thanks [@jonnybel](https://github.com/jonnybel)! - fix clipping of cells when table is resized

## 10.22.2

### Patch Changes

- [`ae085cf`](https://github.com/commercetools/ui-kit/commit/ae085cf22c8551a29a177c03fe3ebf45febde3b9) [#1379](https://github.com/commercetools/ui-kit/pull/1379) Thanks [@jonnybel](https://github.com/jonnybel)! - add data-testid attributes to headers and cells

## 10.22.1

### Patch Changes

- [`30b1b95`](https://github.com/commercetools/ui-kit/commit/30b1b95321f15726921c8a2733c3ae94b898de38) [#1373](https://github.com/commercetools/ui-kit/pull/1373) Thanks [@mohib0306](https://github.com/mohib0306)! - Apply cell alignment prop to the header cells as well

- Updated dependencies [[`17c79cb`](https://github.com/commercetools/ui-kit/commit/17c79cb8e065ea880996e3267873233d6823438e)]:
  - @commercetools-uikit/accessible-button@10.22.1
  - @commercetools-uikit/secondary-icon-button@10.22.1

## 10.22.0

### Minor Changes

- [`f592e68`](https://github.com/commercetools/ui-kit/commit/f592e685bb1af2ae3cc09fae010abe25e130b5e6) [#1353](https://github.com/commercetools/ui-kit/pull/1353) Thanks [@mohib0306](https://github.com/mohib0306)! - Enable rows to expand and collapse in case they have truncated columns

### Patch Changes

- Updated dependencies [[`86a85e6`](https://github.com/commercetools/ui-kit/commit/86a85e642d0d47089c3ddd7094974c58badbed56), [`3d0b4fb`](https://github.com/commercetools/ui-kit/commit/3d0b4fb455af11bc144422793320ea44ddbfce81)]:
  - @commercetools-uikit/icons@10.22.0

## 10.21.0

### Patch Changes

- Updated dependencies [[`f3fb2f0`](https://github.com/commercetools/ui-kit/commit/f3fb2f02f303b8627eece8972c5421e0d17ebb64)]:
  - @commercetools-uikit/utils@10.21.0
  - @commercetools-uikit/accessible-button@10.21.0
  - @commercetools-uikit/hooks@10.21.0

## 10.20.0

### Patch Changes

- Updated dependencies [[`7c02900`](https://github.com/commercetools/ui-kit/commit/7c029007f4d5f49fe2db3a648ccba0d65176d770)]:
  - @commercetools-uikit/icons@10.20.0

## 10.19.1

### Patch Changes

- [`cb8776f`](https://github.com/commercetools/ui-kit/commit/cb8776f258a0285e44e2046c4b955279fc778c82) [#1351](https://github.com/commercetools/ui-kit/pull/1351) Thanks [@mohib0306](https://github.com/mohib0306)! - Indicate sortable columns of a data table clearly in the UI

## 10.18.7

### Patch Changes

- [`531d365`](https://github.com/commercetools/ui-kit/commit/531d365859eef2609ffe41b25a70edd19c23afc9) [#1345](https://github.com/commercetools/ui-kit/pull/1345) Thanks [@jonnybel](https://github.com/jonnybel)! - fix to prevent table from overflowing if it's too wide for its container, adding a horizontal scrollbar if needed

* [`531d365`](https://github.com/commercetools/ui-kit/commit/531d365859eef2609ffe41b25a70edd19c23afc9) [#1345](https://github.com/commercetools/ui-kit/pull/1345) Thanks [@jonnybel](https://github.com/jonnybel)! - fixed `maxWidth` prop to actually contain the table within the width value adding a horizontal scrollbar if necessary
