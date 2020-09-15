import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Badge, Form, ListGroup } from 'react-bootstrap';

const style = {
  app: {
    position: 'relative',
    margin: '8px auto',
  },
  dropdown: {
    position: 'relative',
    zIndex: 1
  },
  selectedItem: {
    position: 'absolute',
    top: 'calc(1.5em + .75rem + 4px)',
    width: 'inherit',
  },
};

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

function App({ inputValue, onInputChange, data = [], onItemSelect }) {
  const [suggestionList, updateSuggestionList] = useState([]);
  const [showSuggestion, toggleSuggestionList] = useState(false);
  const [selectedItem, updateSelectedItem] = useState([]);

  useEffect(() => {
    if (data.length) {
      toggleSuggestionList(true);
      updateSuggestionList(data);
    } else {
      toggleSuggestionList(false);
    }
  }, [data]);

  const removeItem = item => {
    const index = selectedItem.findIndex(list => list.value === item.value);
    if (index !== -1) {
      const newList = [...selectedItem];
      newList.splice(index, 1);
      updateSelectedItem(newList);
    }
  };

  const handleSelectSuggestion = suggestion => {
    toggleSuggestionList(false);
    updateSelectedItem([...selectedItem, suggestion]);
    onItemSelect && onItemSelect([...selectedItem, suggestion]);
  };

  return (
    <div style={style.app}>
      <div>
        <Form.Control
          as='input'
          type='text'
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
        />
        {suggestionList.length && showSuggestion ? (
          <div style={style.dropdown}>
            <ListGroup>
              {suggestionList.map((suggestion, index) => (
                <ListGroup.Item
                  action
                  active={selectedItem.filter(item => item.value === suggestion.value)[0]}
                  key={index}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {suggestion.label}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ) : null}
      </div>

      {selectedItem.length ? (
        <div style={style.selectedItem}>
          {selectedItem.map(item => (
            <span
              key={item.value}
              onClick={() => removeItem(item)}
              style={{ margin: '8px', cursor: 'pointer' }}
            >
              <Badge variant='secondary'>{`${item.label}`}</Badge>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
