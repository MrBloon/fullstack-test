export const CREATE_FEEDBACK = 'CREATE_FEEDBACK';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// export default (async function showResults(values) {
//   await sleep(500); // simulate server latency
//   window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
// });








export function createFeedback(values) {
  const body = {
    "first_name": values.firstName,
    "last_name": values.lastName,
    "email": values.email,
    "content": values.messages
  };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch('/api/v1/feedback', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: CREATE_FEEDBACK,
    payload: promise
  };

}
