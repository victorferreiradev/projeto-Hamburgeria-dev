// Obtenção dos elementos do DOM
const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkout = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-model-btn");
const cartCounter = document.getElementById("cart-count");
const addresInput = document.getElementById("address");
const addresWarn = document.getElementById("address-warn");

let cart = [];

// Abrir modal do carrinho ao clicar no botão de carrinho
cartBtn.addEventListener('click', function() {
    updateCartModal();
    cartModal.style.display = "flex";
});

// Fechar modal do carrinho ao clicar fora dele
cartModal.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// Fechar modal do carrinho ao clicar no botão de fechar
closeModalBtn.addEventListener('click', function() {
    cartModal.style.display = "none";
});

// Adicionar item ao carrinho ao clicar nos botões de adicionar ao carrinho no menu
menu.addEventListener('click', function(event) {
    let parentsButton = event.target.closest(".add-to-cart-btn");

    if (parentsButton) {
        const name = parentsButton.getAttribute("data-name");
        const price = parseFloat(parentsButton.getAttribute("data-price"));
        addToCart(name, price);
    }
});

// Função para adicionar um item ao carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1; // Incrementar quantidade se o item já estiver no carrinho
    } else {
        cart.push({ name, price, quantity: 1 }); // Adicionar novo item ao carrinho
    }

    updateCartModal();
}

// Atualizar o conteúdo do modal do carrinho no HTML
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('flex', 'justify-between', 'mb-4', 'flex-col');

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${item.name}</p>
                    <p>Qtd: ${item.quantity}</p>
                    <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-from-cart-btn" data-name="${item.name}">Remover</button>
            </div>
        `;

        total += item.price * item.quantity;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Exibir total do carrinho
    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Atualizar contador de itens no carrinho
    cartCounter.innerHTML = cart.length;
}

// Remover item do carrinho ao clicar no botão de remover
cartItemsContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-from-cart-btn")) {
        const name = event.target.getAttribute("data-name");
        removeItemCart(name);
    }
});

// Função para remover um item do carrinho
function removeItemCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        const item = cart[index];

        if (item.quantity > 1) {
            item.quantity -= 1; // Decrementar quantidade se houver mais de 1 item
        } else {
            cart.splice(index, 1); // Remover item do carrinho se houver apenas 1
        }

        updateCartModal();
    }
}

// Validar campo de endereço ao digitar
addresInput.addEventListener("input", function(event) {
    let inputValue = event.target.value;

    if (inputValue !== "") {
        addresWarn.classList.add("hidden"); // Ocultar aviso se o campo de endereço estiver preenchido
        addresInput.classList.remove("border-red-500"); // Remover estilo de campo inválido
    }
});

// Realizar checkout ao clicar no botão de checkout
checkout.addEventListener("click", function() {
    const isOpen = checkRestaurantOpen();

    if (!isOpen) {
        alert("Restaurante fechado no momento!");
        return;
    }

    if (cart.length === 0) return;
    if (addresInput.value === "") {
        addresWarn.classList.remove("hidden"); // Exibir aviso se o campo de endereço estiver vazio
        addresInput.classList.add("border-red-500"); // Adicionar estilo de campo inválido
        return;
    }

    // Enviar o pedido para a API do WhatsApp
    const cartItems = cart.map(item => `${item.name} Quantidade: ${item.quantity} Preço: R$${item.price} |`).join("");
    const message = encodeURIComponent(cartItems);
    const phone = "+5538991348199";
    const address = encodeURIComponent(addresInput.value);

    // Abrir o WhatsApp com a mensagem e endereço preenchidos
    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${address}`, "_blank");

    cart = []; // Limpar carrinho após checkout
    updateCartModal();
});

// Verificar se o restaurante está aberto
function checkRestaurantOpen() {
    const data = new Date();
    const hour = data.getHours();
    return hour >= 18 && hour < 22; // Retornar true se o restaurante estiver aberto
}

// Atualizar estilo do span com base no horário do restaurante
const spanItem = document.getElementById("date-span");
const isOpen = checkRestaurantOpen();

if (isOpen) {
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600");
} else {
    spanItem.classList.remove("bg-green-600");
    spanItem.classList.add("bg-red-500");
}