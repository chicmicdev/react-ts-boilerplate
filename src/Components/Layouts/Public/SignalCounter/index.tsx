import { useSignal, useSignalEffect } from '@preact/signals-react';

export default function SignalCounter() {
  const count = useSignal(0);
  // eslint-disable-next-line no-console
  console.log('Component is mounted');
  useSignalEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Value: ${count.value}`);
  });

  return (
    <div>
      <h3> Signal Counter</h3>
      <div>
        <button
          type="button"
          onClick={() => {
            count.value += 1;
          }}
        >
          Add
        </button>
        &nbsp;-&nbsp;{count}&nbsp;-&nbsp;
        <button
          type="button"
          onClick={() => {
            count.value -= 1;
          }}
        >
          Substract
        </button>
      </div>
    </div>
  );
}
