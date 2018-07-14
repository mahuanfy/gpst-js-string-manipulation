function generateHtml(shows) {
  let result = `
<div data-template-chosen="a">
    <div>
        <h1>Upcoming Shows</h1>\n`
  shows.shows.map(item =>{
      result +=`        <ul>
            <li><strong>Title:</strong> ${item.title}</li>
            <li><strong>Description:</strong> ${item.description}</li>
            <li><strong>Video:</strong> ${item.video}</li>
            <li><strong>Category:</strong> ${item.category}</li>
        </ul>\n`
  })
  result +=`    </div>
</div>
`;
  return result;
}

module.exports = {
  generateHtml: generateHtml
};