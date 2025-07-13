const states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
const stateSelect = document.getElementById('state');
states.forEach(state => {
  const opt = document.createElement('option');
  opt.value = opt.textContent = state;
  stateSelect.appendChild(opt);
});

function showStep2() {
  document.getElementById('step2-form').classList.remove('hidden');
}

function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('step2-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your submission has been received. An underwriter will review it shortly.');
});