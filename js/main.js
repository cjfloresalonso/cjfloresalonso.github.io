const quotes = [
  ["Learn to love problem solving; life is a just series just a series problems to solve.", "Mercedes Alonso"],
  ["Learn to love problem solving; life is a just series just a series problems to solve.", "Mercedes Alonso"],
  ["Learn to love problem solving; life is a just series just a series problems to solve.", "Mercedes Alonso"],
  ["Que todos los males fueran como este...", "Mercedes Alonso"],
  // ["If only all bad things where like this one...", "Mercedes Alonso"],
  // ["Testimonials are a cringy marketing tactic.", "cjfloresalonso"],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  // ["It is during our darkest moments that we must focus to see the light.", "Aristotle"],
  // ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"],
  ["If you tell the truth, you don't have to remember anything.", "Mark Twain"],
  ["oof.", "discoverer of CVE-2008-0166 (probably)"],
  ["Try Harder!", "Offensive Security"]
  
]

const random_quote = () => {let r = Math.floor(Math.random() * quotes.length);$('#footer_quote').html(quotes[r][0]+'<br><p class="text-right m-0"><cite> &mdash; '+quotes[r][1]+'</cite></p>');}
const copyright_year = () => {$('#footer_copyright_year').text(new Date().getFullYear());}


random_quote();
copyright_year();
