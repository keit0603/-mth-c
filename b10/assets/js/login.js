const pass_field = document.querySelector('.pass-key');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(pass_field.type === "password"){
         pass_field.type = "text";
         showBtn.textContent = "HIDE";
         showBtn.style.color = "#3498db";
       }else{
         pass_field.type = "password";
         showBtn.textContent = "SHOW";
         showBtn.style.color = "#222";
       }
      });


        const form = document.getElementById('login-form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameError = document.getElementById('username-error');
        const passwordError = document.getElementById('password-error');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Validate username and password
            if (username === '') {
                usernameError.textContent = 'Username is required';
                usernameInput.classList.add('input-error');
            } else {
                usernameError.textContent = '';
                usernameInput.classList.remove('input-error');
            }

            if (password === '') {
                passwordError.textContent = 'Password is required';
                passwordInput.classList.add('input-error');
            } else {
                passwordError.textContent = '';
                passwordInput.classList.remove('input-error');
            }

            // Authenticate user (dummy example)
            if (username === 'foodie' && password === 'secret') {
                // Redirect to dashboard or show success message
                passwordError.textContent = '';
                passwordInput.classList.remove('input-error');
                passwordInput.classList.add('input-success');
                form.reset();
                alert('Login successful!');
            } else {
                // Show error message
                passwordError.textContent = 'Invalid username or password';
                passwordInput.classList.add('input-error');
            }
        });