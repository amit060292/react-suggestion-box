# ReactTagSuggestion

> This library can be used to create a react tag suggestion box where the items gets listed as tags below the box.

## Install

Install with yarn
```
yarn add react-tag-suggestion
```
or with npm
```
npm i react-tag-suggestion
```

## API

### ReactTagSuggestion

| Props  | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| inputValue | any | null | Input field value  |
| onInputChange | function | undefined |  Fuction to handle input change |
| data  | array | [] | The data for dropdown. The format should be [{ value: '', label: ''}] |
| onItemSelect  | function | undefined | Function to handle item select. Its returns the list of items selected |


