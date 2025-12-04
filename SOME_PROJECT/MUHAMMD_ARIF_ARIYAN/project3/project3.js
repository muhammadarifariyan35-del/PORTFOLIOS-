const quotes = [
    {
        quote: 'সবার সাথে তাল মিলিয়ে যে কথা বলে সে ব্যাক্তিত্বহীন।',
        author: 'মার্ক টোয়াইন'
    },
    {
        quote: 'যে জাতি তার বাচ্চাদের বিড়ালের ভয় দেখিয়ে ঘুম পাড়ায়, তারা সিংহের সাথে লড়াই করা কিভাবে শিখবে? যারা পানিতে ডুবে যাওয়ার ভয়ে তার সন্তানকে ডোবায় নামতে দেন না, কিভাবে সে সন্তান আটলান্টিক পাড়ি দিবে?',
        author: 'শেরে বাংলা এ. কে. ফজলুল হক'
    },
    {
        quote: 'যে নিজেকে দমন করতে পারে না সে নিজের জন্যেও বিপদজনক এবং অন্য সবার জন্যেও।',
        author: 'থেলিস'
    },
    {
        quote: 'প্রত্যেককে বিশ্বাস করা বিপদজনক; কিন্তু কাউকে বিশ্বাস না করা আরো বেশী বিপদজনক।',
        author: 'আব্রাহাম লিংকন'
    },
    {
        quote: 'ভীরুরা মরার আগে বারে বারে মরে। সাহসীরা মৃত্যুর স্বাদ একবারই গ্রহণ করে।',
        author: 'শেক্সপীয়ার'
    },
    {
        quote: 'স্বপ্নপূরণই জীবনের একমাত্র লক্ষ্য নয়। তাই বলে, স্বপ্নকে ত্যাগ করে নয়, তাকে সঙ্গে নিয়ে চলো। স্বপ্ন ছাড়া জীবন অর্থহীন।',
        author: 'ব্রায়ান ডাইসন'
    },
    {
        quote: 'যারা নিজেকে নিয়ে ব্যস্ত থাকে তারা কখনও অন্যের দুঃখ কষ্টকে উপলদ্ধি করতে পারেনা।',
        author: 'রেদোয়ান মাসুদ'
    },
    {
        quote: 'আইন ভাঙ্গার জন্যই তৈরী হয়।',
        author: 'জন উইলসন'
    }
];
const pera = document.querySelector('#P');
const h4 = document.querySelector('#h4');
const button = document.querySelector('button');

function newfunc(){
     const rendom = Math.floor(Math.random() * quotes.length)

    pera.textContent = quotes[rendom].quote
    h4.textContent = quotes[rendom].author
}
newfunc()
button.addEventListener('click', newfunc)