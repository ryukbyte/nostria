javascript

// NOSTRA E-COMMERCE WEBSITE
// BEGINNER JAVASCRIPT


// 1. MOBILE MENU


var menuButton = document.getElementById("menuButton");

var navLinks = document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });


    var navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });

}


// 2. NEWSLETTER FORM


var newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            // Prevent page from refreshing
            event.preventDefault();


            var newsletterEmail =
                document.getElementById("newsletterEmail");


            var newsletterMessage =
                document.getElementById(
                    "newsletterMessage"
                );


            // EMAIL REGEX

            var emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            var emailValue =
                newsletterEmail.value.trim();


            if (emailPattern.test(emailValue)) {

                newsletterMessage.textContent =
                    "Successfully subscribed!";

                newsletterMessage.style.color =
                    "green";

                newsletterEmail.value = "";

            }

            else {

                newsletterMessage.textContent =
                    "Please enter a valid email.";

                newsletterMessage.style.color =
                    "red";

            }

        }
    );

}



// 3. PRODUCT ARRAY


var products = [

    {
        name: "Classic Shirt",
        category: "Men",
        price: 1499,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Everyday Denim",
        category: "Women",
        price: 1899,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Street Sneakers",
        category: "Shoes",
        price: 2299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Daily Backpack",
        category: "Accessories",
        price: 1299,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Soft Knit Sweater",
        category: "Women",
        price: 1799,
        image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Relaxed Jacket",
        category: "Men",
        price: 2499,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Kids Hoodie",
        category: "Kids",
        price: 999,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Cotton T-Shirt",
        category: "Men",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Linen Shirt",
        category: "Women",
        price: 1599,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Canvas Sneakers",
        category: "Shoes",
        price: 1999,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Leather Wallet",
        category: "Accessories",
        price: 899,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    },


    {
        name: "Kids Denim Jacket",
        category: "Kids",
        price: 1399,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80"
    }

];


// 4. DISPLAY PRODUCTS


var productContainer =
    document.getElementById(
        "productContainer"
    );


function displayProducts(productList) {

    if (!productContainer) {

        return;

    }


    // Clear previous products

    productContainer.innerHTML = "";


    // If no product exists

    if (productList.length === 0) {

        productContainer.innerHTML =
            '<div class="no-products">' +
            "No products found." +
            "</div>";

        return;

    }


    // LOOP THROUGH PRODUCTS

    for (
        var i = 0;
        i < productList.length;
        i++
    ) {

        var product =
            productList[i];


        var productHTML =

            '<div class="product-card">' +

            '<img src="' +
            product.image +
            '" alt="' +
            product.name +
            '">' +

            "<p>" +
            product.category +
            "</p>" +

            "<h3>" +
            product.name +
            "</h3>" +

            "<strong>₹" +
            product.price +
            "</strong>" +

            "</div>";


        productContainer.innerHTML +=
            productHTML;

    }

}

// 5. SEARCH + FILTER


var searchInput =
    document.getElementById("search");


var filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


var selectedCategory = "All";


var resultCount =
    document.getElementById(
        "resultCount"
    );

// FILTER FUNCTION


function filterProducts() {


    if (!productContainer) {

        return;

    }


    var searchValue = "";


    if (searchInput) {

        searchValue =
            searchInput.value
                .toLowerCase()
                .trim();

    }


    // Create empty array

    var filteredProducts = [];



    // LOOP THROUGH ALL PRODUCTS

    for (
        var i = 0;
        i < products.length;
        i++
    ) {

        var product =
            products[i];


        // SEARCH CONDITION

        var matchesSearch =
            product.name
                .toLowerCase()
                .includes(searchValue);



        // CATEGORY CONDITION

        var matchesCategory =
            selectedCategory === "All" ||
            product.category ===
            selectedCategory;



        // BOTH CONDITIONS MUST BE TRUE

        if (
            matchesSearch &&
            matchesCategory
        ) {

            filteredProducts.push(
                product
            );

        }

    }


    // DISPLAY RESULT

    displayProducts(
        filteredProducts
    );


    // SHOW RESULT COUNT

    if (resultCount) {

        resultCount.textContent =
            filteredProducts.length +
            " product(s) found";

    }

}


// 6. SEARCH EVENT


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function (event) {

            console.log(
                event.target.value
            );


            filterProducts();

        }
    );

}


// 7. CATEGORY BUTTON EVENTS

filterButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function (event) {


                // Get category from
                // data-category

                selectedCategory =
                    event.target.dataset.category;



                // Remove active class
                // from all buttons

                filterButtons.forEach(
                    function (button) {

                        button.classList.remove(
                            "active"
                        );

                    }
                );



                // Add active class
                // to clicked button

                event.target.classList.add(
                    "active"
                );



                // Run filter

                filterProducts();

            }
        );

    }
);



// Display products when
// Collections page opens

if (productContainer) {

    displayProducts(products);

    filterProducts();

}

// 8. CONTACT FORM


var contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {


    // GET ELEMENTS

    var nameInput =
        document.getElementById("name");


    var emailInput =
        document.getElementById("email");


    var phoneInput =
        document.getElementById("phone");


    var subjectInput =
        document.getElementById("subject");


    var messageInput =
        document.getElementById("message");


    var submitButton =
        document.getElementById(
            "submitButton"
        );



    // ERROR ELEMENTS

    var nameError =
        document.getElementById(
            "nameError"
        );


    var emailError =
        document.getElementById(
            "emailError"
        );


    var phoneError =
        document.getElementById(
            "phoneError"
        );


    var subjectError =
        document.getElementById(
            "subjectError"
        );


    var messageError =
        document.getElementById(
            "messageError"
        );


    var charCount =
        document.getElementById(
            "charCount"
        );


    var successMessage =
        document.getElementById(
            "successMessage"
        );



    // NAME VALIDATION


    function validateName() {


        var namePattern =
            /^[A-Za-z ]{3,}$/;


        var nameValue =
            nameInput.value.trim();


        if (
            !namePattern.test(
                nameValue
            )
        ) {

            nameError.textContent =
                "Enter a valid name.";

            return false;

        }


        nameError.textContent = "";

        return true;

    }


    // EMAIL VALIDATION


    function validateEmail() {


        var emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        var emailValue =
            emailInput.value.trim();


        if (
            !emailPattern.test(
                emailValue
            )
        ) {

            emailError.textContent =
                "Enter a valid email.";

            return false;

        }


        emailError.textContent = "";

        return true;

    }


    // PHONE VALIDATION

    function validatePhone() {


        var phonePattern =
            /^[0-9]{10}$/;


        var phoneValue =
            phoneInput.value.trim();


        if (
            !phonePattern.test(
                phoneValue
            )
        ) {

            phoneError.textContent =
                "Phone must contain 10 digits.";

            return false;

        }


        phoneError.textContent = "";

        return true;

    }


    // SUBJECT VALIDATION


    function validateSubject() {


        var subjectValue =
            subjectInput.value.trim();


        if (
            subjectValue.length < 5
        ) {

            subjectError.textContent =
                "Subject must contain at least 5 characters.";

            return false;

        }


        subjectError.textContent = "";

        return true;

    }


    // MESSAGE VALIDATION


    function validateMessage() {


        var messageValue =
            messageInput.value.trim();


        if (
            messageValue.length < 10
        ) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            return false;

        }


        if (
            messageValue.length > 200
        ) {

            messageError.textContent =
                "Maximum 200 characters allowed.";

            return false;

        }


        messageError.textContent = "";

        return true;

    }

    // CHARACTER COUNTER


    function updateCharacterCount() {


        var length =
            messageInput.value.length;


        charCount.textContent =
            length + " / 200";

    }


    // RADIO BUTTONS


    function checkRadioButton() {


        var contactMethods =
            document.getElementsByName(
                "contactMethod"
            );


        var selectedMethod = "";


        for (
            var i = 0;
            i < contactMethods.length;
            i++
        ) {


            if (
                contactMethods[i].checked
            ) {

                selectedMethod =
                    contactMethods[i].value;

            }

        }


        console.log(
            "Selected contact method:",
            selectedMethod
        );


        return selectedMethod;

    }


    // CHECKBOXES


    function checkCheckboxes() {


        var interests =
            document.getElementsByName(
                "interest"
            );


        var selectedInterests = [];


        for (
            var i = 0;
            i < interests.length;
            i++
        ) {


            if (
                interests[i].checked
            ) {

                selectedInterests.push(
                    interests[i].value
                );

            }

        }


        console.log(
            "Selected interests:",
            selectedInterests
        );


        return selectedInterests;

    }


    // CHECK ENTIRE FORM


    function checkForm() {


        var nameValid =
            validateName();


        var emailValid =
            validateEmail();


        var phoneValid =
            validatePhone();


        var subjectValid =
            validateSubject();


        var messageValid =
            validateMessage();



        if (
            nameValid &&
            emailValid &&
            phoneValid &&
            subjectValid &&
            messageValid
        ) {

            submitButton.disabled =
                false;

        }

        else {

            submitButton.disabled =
                true;

        }

    }


    // REAL-TIME INPUT EVENTS


    nameInput.addEventListener(
        "input",
        checkForm
    );


    emailInput.addEventListener(
        "input",
        checkForm
    );


    phoneInput.addEventListener(
        "input",
        checkForm
    );


    subjectInput.addEventListener(
        "input",
        checkForm
    );



    messageInput.addEventListener(
        "input",
        function () {


            updateCharacterCount();


            checkForm();

        }
    );


    // RADIO EVENTS


    var contactMethods =
        document.getElementsByName(
            "contactMethod"
        );


    for (
        var i = 0;
        i < contactMethods.length;
        i++
    ) {


        contactMethods[i]
            .addEventListener(
                "change",
                checkRadioButton
            );

    }


    // CHECKBOX EVENTS


    var interests =
        document.getElementsByName(
            "interest"
        );


    for (
        var i = 0;
        i < interests.length;
        i++
    ) {


        interests[i]
            .addEventListener(
                "change",
                checkCheckboxes
            );

    }

    // FORM SUBMIT


    contactForm.addEventListener(
        "submit",
        function (event) {


            // Stop actual form submission

            event.preventDefault();


            checkForm();


            if (
                submitButton.disabled === false
            ) {


                var selectedMethod =
                    checkRadioButton();


                var selectedInterests =
                    checkCheckboxes();


                console.log(
                    "Contact method:",
                    selectedMethod
                );


                console.log(
                    "Interests:",
                    selectedInterests
                );


                successMessage.textContent =
                    "Message sent successfully!";


                contactForm.reset();


                updateCharacterCount();


                submitButton.disabled =
                    true;

            }

        }
    );


    // Initial character count

    updateCharacterCount();

}


// 9. ARRAY METHOD PRACTICE


var skills = [];




skills.push("HTML");

skills.push("CSS");

skills.push("JavaScript");

console.log(skills);




console.log(
    skills.includes("JavaScript")
);




console.log(
    skills.indexOf("CSS")
);




skills.splice(1, 1);

console.log(skills);
