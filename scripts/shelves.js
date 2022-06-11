let phones = [
	{
		imageUrl: './asset/image/device/s22ultra.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/11t.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/a13.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/a53.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/a73.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/c9.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/ip13prm.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/m52.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/oppo.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/redmi11.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
	{
		imageUrl: './asset/image/device/xm12.jpg',
		name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
		price: 29990000,
		description: 'hỗ trợ cũ đổi mới, trợ giá lên đến 300.000đ',
		rating: 4.5
	},
]

class DirectButton {
	prevBtn
	nextBtn
	counter
	shelves_content

	constructor(shelves_content, prevBtn, nextBtn, counter, cardWidth) {
		this.prevBtn = prevBtn
		this.nextBtn = nextBtn
		this.counter = counter
		this.counter = counter

		shelves_content.style.transition = '0.4s'

		nextBtn.onclick = () => {
			if(counter >= phones.length - 5) return
			counter++;
			shelves_content.style.transform = `translateX(${-(cardWidth + 32) * counter}px)`
		}

		prevBtn.onclick = () => {
			if(counter <= 0) return
			counter--;
			shelves_content.style.transform = `translateX(${-(cardWidth + 32) * counter}px)`
		}
	}
}

let setListOfDirBtnAndItsAction = () => {
	let directButtons = []

	let shelves = document.querySelectorAll('.shelves')
	let card = document.querySelector('.best-sellet .shelves-content .card-container')
	let cardWidth = card.clientWidth
	let counter = 1

	shelves.forEach(shelve => {
		let prevBtn = shelve.children[0]
		let nextBtn = shelve.children[1]
		let shelves_content = shelve.lastElementChild
		directButtons.push(new DirectButton(shelves_content, prevBtn, nextBtn, counter, cardWidth))
	});

	return directButtons
}


let setInnerHtml = (fatherElement) => {
	phones.forEach(phone => {
		cardContainer = document.createElement('div')

		productPhoto = document.createElement('div')
		image = document.createElement('img')
		image.src = phone.imageUrl
		image.alt = ''

		productName = document.createElement('div')
		name_h2 = document.createElement('h2')
		name_h2.innerText = phone.name

		description = document.createElement('div')
		description_p = document.createElement('p')
		description_p.innerText = phone.description

		price = document.createElement('div')
		price_p = document.createElement('p')
		price_p.innerText = phone.price.toLocaleString() + 'đ'

		rating = document.createElement('div')

		cardContainer.className = 'card-container';
		productPhoto.className = 'photo';
		productName.className = 'name';
		price.className = 'price';
		description.className = 'description';
		rating.className = 'rating';

		cardContainer.append(productPhoto, productName, price, description, rating)

		productPhoto.appendChild(image)
		productName.appendChild(name_h2)
		description.appendChild(description_p)
		price.appendChild(price_p)
		rating.innerHTML = `<i class="fa-solid fa-star"></i>
		<i class="fa-solid fa-star"></i>
		<i class="fa-solid fa-star"></i>
		<i class="fa-solid fa-star"></i>
		<i class="fa-solid fa-star"></i>`

		fatherElement.append(cardContainer)
	});

}


let shelves_content = document.querySelectorAll('.best-sellet .shelves-content')
shelves_content.forEach(shelve => {
	setInnerHtml(shelve)
});

setListOfDirBtnAndItsAction()