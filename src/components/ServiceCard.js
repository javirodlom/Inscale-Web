export const ServiceCard = (title, items) => {
    const itemsHtml = items.map(item => `<li>${item}</li>`).join('');
    return `
    <div class="service-card btn-outline">
      <h3 class="service-card-title">${title}</h3>
      <ul class="service-card-items">
        ${itemsHtml}
      </ul>
    </div>
  `;
};
