import React from 'react';
import './style.css';
import { Button, ButtonGroup, Tooltip, Position } from '@blueprintjs/core';

export const ProductRow = function(props) {
  const { name, price, stocked } = props.product;
  const { triggerDeleteAlert } = props;

  return (
    <tr className={'product-row'}>
      <td className={stocked ? '' : 'red-color'}>{name}</td>
      <td>{price}</td>
      <td className={'edit-actions-col'}>
        <ButtonGroup>
          <Tooltip content={'Delete'} position={Position.RIGHT}>
            <Button
              icon={'trash'}
              onClick={() => triggerDeleteAlert(props.product)}
            />
          </Tooltip>
        </ButtonGroup>
      </td>
    </tr>
  );
};
