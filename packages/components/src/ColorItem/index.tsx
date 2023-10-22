import { style } from '@vanilla-extract/css';
import { vars } from '@kpds-prototype/css/index.css';

const ColorItemStyle = style({
  color: vars.color.black,
});

const ColorItem = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div className={ColorItemStyle} style={{ width: 80, height: 80, borderRadius: 12 }} />
      <div>
        <div>Black</div>
        <div>#000000</div>
        <div>$black</div>
      </div>
    </div>
  );
};

export default ColorItem;
