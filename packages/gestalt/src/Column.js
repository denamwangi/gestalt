// @flow strict
import { type Node } from 'react';
import classnames from 'classnames';
import styles from './Column.css';

type Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnProps = {|
  /**
   *
   */
  children?: Node,
  /**
   * The number of units in a 12-unit width that this element will occupy.
   *
   * Also available in responsive sizes: `smSpan`, `mdSpan`, `lgSpan`
   */
  span: Columns,
  /**
   * The number of units in a 12-unit width that this element will occupy in sm and larger viewports.
   */
  smSpan?: Columns,
  /**
   * The number of units in a 12-unit width that this element will occupy in md and larger viewports.
   */
  mdSpan?: Columns,
  /**
   * The number of units in a 12-unit width that this element will occupy in lg and larger viewports.
   */
  lgSpan?: Columns,
|};

/**
 * Use [Column](https://gestalt.pinterest.systems/column) to implement a 12-column system.
 *
 * ![Column light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/cypress/integration/visual-test/__image_snapshots__/Column%20%230.png)
 *
 */
export default function Column(props: ColumnProps): Node {
  const { children } = props;
  const cs = classnames(
    props.span != null && styles[`xsCol${props.span}`],
    props.smSpan != null && styles[`smCol${props.smSpan}`],
    props.mdSpan != null && styles[`mdCol${props.mdSpan}`],
    props.lgSpan != null && styles[`lgCol${props.lgSpan}`],
  );
  return <div className={cs}>{children}</div>;
}
