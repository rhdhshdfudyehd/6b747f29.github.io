// 轮播图功能
const slider = document.querySelector('.tutorial-slider');
const dots = document.querySelectorAll('.slider-dot');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const slides = document.querySelectorAll('.tutorial-slide');

let currentSlide = 0;

// 更新指示点状态
function updateDots() {
	const scrollLeft = slider.scrollLeft;
	const slideWidth = slides[0].offsetWidth + 24; // 24是gap值
	currentSlide = Math.round(scrollLeft / slideWidth);
	
	dots.forEach((dot, index) => {
		dot.classList.toggle('active', index === currentSlide);
	});
}

// 滑动到指定幻灯片
function goToSlide(index) {
	const slideWidth = slides[0].offsetWidth + 24;
	slider.scrollTo({
		left: index * slideWidth,
		behavior: 'smooth'
	});
}

// 上一张幻灯片
function prevSlide() {
	if (currentSlide > 0) {
		goToSlide(currentSlide - 1);
	} else {
		goToSlide(slides.length - 1); // 循环到最后一个
	}
}

// 下一张幻灯片
function nextSlide() {
	if (currentSlide < slides.length - 1) {
		goToSlide(currentSlide + 1);
	} else {
		goToSlide(0); // 循环到第一个
	}
}

// 点击指示点滑动到对应位置
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		goToSlide(index);
	});
});

// 监听滚动事件更新指示点
slider.addEventListener('scroll', updateDots);

// 添加箭头按钮事件
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 初始化
updateDots();

/* // 自动轮播
let slideInterval = setInterval(nextSlide, 5000);

// 鼠标悬停时暂停自动轮播
slider.addEventListener('mouseenter', () => {
	clearInterval(slideInterval);
});

// 鼠标离开时恢复自动轮播
slider.addEventListener('mouseleave', () => {
	slideInterval = setInterval(nextSlide, 5000);
}); */

var is64bit = navigator.userAgent.indexOf('WOW64') !== -1 || navigator.userAgent.indexOf('Win64') !== -1;
if (!is64bit) {
    var downloadBtn = document.querySelector('._download-btn');
    if (downloadBtn) {
        downloadBtn.href = downloadBtn.getAttribute('data-32bit');
    }
}