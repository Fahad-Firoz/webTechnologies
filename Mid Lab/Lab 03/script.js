document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const nameCounter = document.querySelector('#fullname + .counter');
  const commentCounter = document.querySelector('#comments + .counter');

  // 9. Character counters
  document.getElementById('fullname').addEventListener('input', e => {
    nameCounter.textContent = e.target.value.length + '/50';
  });

  document.getElementById('comments').addEventListener('input', e => {
    commentCounter.textContent = e.target.value.length + '/200';
  });

  // 3 & 8. Show/hide other amount & honor section
  document.querySelectorAll('input[name="donation"]').forEach(r => {
    r.addEventListener('change', () => {
      document.getElementById('otherAmount').classList.toggle('hidden', r.value !== 'other');
      updateTotal();
    });
  });

  document.getElementById('honor').addEventListener('change', function() {
    document.getElementById('honorBox').classList.toggle('hidden', !this.checked);
  });

  // 4 & 10. Recurring donation + total calculation
  const recurring = document.getElementById('recurring');
  recurring.addEventListener('change', () => {
    document.getElementById('recurringBox').classList.toggle('hidden', !recurring.checked);
    updateTotal();
  });

  const freq = document.getElementById('frequency');
  freq.addEventListener('change', updateTotal);

  document.querySelectorAll('input[name="donation"], #customAmount').forEach(el => {
    el.addEventListener('input', updateTotal);
    el.addEventListener('change', updateTotal);
  });

  function updateTotal() {
    if (!recurring.checked) {
      document.getElementById('yearTotal').textContent = '$0.00';
      return;
    }
    let amount = 0;
    const sel = document.querySelector('input[name="donation"]:checked');
    if (sel && sel.value !== 'other') amount = +sel.value;
    else if (sel?.value === 'other') amount = +document.getElementById('customAmount').value || 0;

    const mult = { monthly: 12, quarterly: 4, annually: 1 };
    const total = amount * mult[freq.value];
    document.getElementById('yearTotal').textContent = '$' + total.toFixed(2);
  }

  // 6. Password match feedback
  document.getElementById('confirmPassword').addEventListener('input', function() {
    const pwd = document.getElementById('password').value;
    this.style.borderColor = this.value && pwd === this.value ? '#2ecc71' : '#e74c3c';
  });

  // 7. Reset with confirmation
  form.addEventListener('reset', e => {
    e.preventDefault();
    if (confirm('Clear all fields?')) {
      form.reset();
      document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
      nameCounter.textContent = '0/50';
      commentCounter.textContent = '0/200';
      document.getElementById('yearTotal').textContent = '$0.00';
      document.getElementById('confirmPassword').style.borderColor = '#e0e0e0';
    }
  });

  // 1,2. Full validation
  form.addEventListener('submit', e => {
    e.preventDefault();
    const errors = [];

    const required = ['fullname', 'email', 'password', 'confirmPassword', 'dob', 'country'];
    required.forEach(id => {
      if (!document.getElementById(id).value.trim()) errors.push(id);
    });

    if (!document.querySelector('input[name="gender"]:checked')) errors.push('Gender');
    if (!document.getElementById('terms').checked) errors.push('Terms');

    const email = document.getElementById('email').value;
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email');

    if (document.getElementById('password').value !== document.getElementById('confirmPassword').value)
      errors.push('Passwords do not match');

    if (errors.length > 0) {
      alert('Please complete:\n• ' + errors.join('\n• '));
    } else {
      alert('Congratulations! Account created successfully!');
    }
  });
});