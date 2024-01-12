
<script>
    
function confirmEmail() {
        var email1 = document.getElementById('email1').value;
        var email2 = document.getElementById('email2').value;

        if (email1 != email2) {
            alert("Email addresses are not the same.");
            return false;
        } else {
            return true;
        }
    }
</script>
