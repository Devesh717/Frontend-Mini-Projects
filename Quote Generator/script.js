const apiKey= "GhC0THzf7kZcXHWAvuIXyw==sJwjaFxjW1bncAT1";
const api_url= "https://api.api-ninjas.com/v1/quotes";

const quote=document.getElementById("quote");
const author=document.getElementById("author");
async function getquote() {
    try {
        const response=await fetch(api_url, {
            method : "GET",
            headers : {
                "X-Api-Key" : apiKey
            }
        });

        const data = await response.json();
        console.log(data);
        quote.textContent=`${data[0].quote}`;
        author.textContent=`${data[0].author}`;
        }
        catch (error) {
            console.error("Error fetching quote:", error);
            document.getElementById("quote").textContent = "Failed to load quote.";
        }
    }

function share() {
    window.open(" https://www.linkedin.com/share?id=0123456789" + quote.textContent + " ----- by " + author.textContent, "Post Window", "width=600", "height=300");
}