document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const businessType = document.getElementById("businessType").value;
    const state = document.getElementById("state").value;
    const coverageLimit = parseFloat(document.getElementById("coverageLimit").value);

    let baseRate = 0.02;

    if (businessType === "retail") baseRate += 0.005;
    if (businessType === "restaurant") baseRate += 0.01;
    if (state === "CA") baseRate += 0.003;

    const premium = (coverageLimit * baseRate).toFixed(2);

    document.getElementById("quoteResult").style.display = "block";
    document.getElementById("quoteResult").innerHTML = `
      <strong>Estimated Premium:</strong> $${premium}<br>
      <em>Business Type:</em> ${businessType}<br>
      <em>State:</em> ${state}<br>
      <em>Coverage Limit:</em> $${coverageLimit.toLocaleString()}
    `;
  });

  const chatBtn = document.getElementById('chatButton');
  const tooltip = document.getElementById('chatTooltip');

  chatBtn.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  });

  chatBtn.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });

  chatBtn.addEventListener('click', () => {
    alert('Launching team chat... (This would integrate with chat system)');
  });