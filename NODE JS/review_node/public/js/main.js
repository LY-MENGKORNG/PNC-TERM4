

function afterRequest(response) {
    let items = response.data.items;
    let row = "";
    for(let item of items) {
        row += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-outline-primary btn-sm"  data-toggle="modal" data-target="#item-${item.id}">view</button>
                </td>
            </tr>

            
            <div class="modal fade" id="item-${item.id}">
              <div class="modal-dialog">
                <div class="modal-content">
                
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  <!-- Modal body -->
                  <div class="modal-body">
                    <span class="badge bg-info">${item.name}</span>
                    <span class="badge bg-danger">${item.price}</span>
                  </div>
                  
               
                </div>
              </div>
            </div>
            
          </div>
          
        `;
    }
    document.querySelector('tbody').innerHTML = row;
}

function getItem() {
    axios
    .get('/api/v1/items/')
    .then(afterRequest)
    .catch(err => console.error(err))
}

getItem();