// Optional: Add smooth scrolling to service details if needed
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Here you would typically navigate to service details page
    // For demo purposes, we'll just show an alert
    const serviceName = e.target.closest('.service-card').querySelector('h3').textContent;
    alert(`More information about ${serviceName} would appear here.`);
  });
});