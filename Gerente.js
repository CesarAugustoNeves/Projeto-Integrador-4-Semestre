document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
               
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
           
                tab.classList.add('active');
                
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
        
        document.getElementById('productForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const productName = document.getElementById('productName').value;
            const productCode = document.getElementById('productCode').value;
            const productPrice = document.getElementById('productPrice').value;
            const productStock = document.getElementById('productStock').value;
            const productCategory = document.getElementById('productCategory').value;
            
         
            console.log('Produto a ser cadastrado:', {
                name: productName,
                code: productCode,
                price: productPrice,
                stock: productStock,
                category: productCategory
            });
            
          
            alert('Produto cadastrado com sucesso!');
            this.reset();
        });
        
      
        document.getElementById('logoutBtn').addEventListener('click', () => {
            if (confirm('Tem certeza que deseja sair da área gerencial?')) {
               
                window.location.href = 'telaLogin.html';
            }
        });
        
      
        document.getElementById('exportBtn').addEventListener('click', () => {
            alert('Relatórios exportados com sucesso!');
        });
