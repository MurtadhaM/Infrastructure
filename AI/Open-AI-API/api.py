import openai
import dotenv
openai.api_key = dotenv.get_key("OPENAI_API_KEY")

response = openai.Completion.create(
    engine="text-davinci-002",
    prompt="Translate the following English text to French: '{}'",
    max_tokens=60
)

print(response.choices[0].text.strip())
