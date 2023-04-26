import { useState } from 'react';
import { JshCurrencyField, JshWelcome } from '@jsheroes/react';

import styles from './app.module.scss';

export function App() {
  const [currencyValue, setCurrencyState] = useState('100.99');

  const handleChange = (ev: CustomEvent<{ value: string }>) => {
    console.log('Currency value changed!', ev.detail.value);
    setCurrencyState(ev.detail.value);
  };

  return (
    <>
      <JshWelcome dayStart="18" dayEnd="19th" month="May" year="2023" city="Cluj-Napoca, Romania" />
      <div className={styles.header}>
        <h1 className={styles.h1}>
          <span> Hello there, </span>
          welcome to JsHeroes React-Demo 👋
        </h1>
        <img
          width="300"
          alt="Angular Logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        />
      </div>
      <div className={styles.currencyField}>
        <JshCurrencyField currency="eur" value={currencyValue} onJshChange={handleChange} />
      </div>
    </>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/*                                    Notes                                   */
/* -------------------------------------------------------------------------- */

/**
  When not using the React Output target from Stencil, you won't be able to bind to the component properties
  (e.g. <jsh-welcome dayStart={18}) and you can only use the component HTML attributes.

  ```
    <jsh-welcome day-start="18" day-end="19th" ... />
  ```

  Event binding will not work, and as a consumer, you need to make a reference to the component and attach an Event listener to the event.

  ```
    <jsh-currency-field currency="eur" value={currencyValue} ref={currencyField} />
  ```

  ```
    const currencyField = useRef<HTMLElement>(null);

    useEffect(() => {
      const customElem = currencyField.current;
      if (!customElem) return;

      const handleFieldChange = (ev: Event) => {
        const { value } = (ev as CustomEvent).detail as { value: string };
        setCurrencyState(value);
      };

      customElem.addEventListener('jshChange', handleFieldChange);
      return () => {
        customElem.removeEventListener('jshChange', handleFieldChange);
      };
    }, [])
  ```
*/
