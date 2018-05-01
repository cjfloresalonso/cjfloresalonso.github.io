const quotes = [
  ["Learn to love problem solving; life is a just series just a series problems to solve.", "Mercedes Alonso"],
  ["Testimonials are a cringy marketing tactic.", "cjfloresalonso"],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  ["It is during our darkest moments that we must focus to see the light.", "Aristotle"]
]

const random_quote = () => {let r = Math.floor(Math.random() * quotes.length);$('#footer_quote').html(quotes[r][0]+' &mdash; <cite>'+quotes[r][1]+'</cite>');}
const copyright_year = () => {$('#footer_copyright_year').text(new Date().getFullYear());}


random_quote();
copyright_year();
