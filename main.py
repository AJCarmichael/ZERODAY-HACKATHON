import asyncio
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from dotenv import load_dotenv

load_dotenv()

from browser_use import Agent, Tools
from browser_use.browser import BrowserProfile, BrowserSession
from browser_use.llm import ChatGoogle

browser_session = BrowserSession(browser_profile=BrowserProfile(cdp_url='http://localhost:9222', is_local=True))
tools = Tools()


async def main():
	agent = Agent(
		task='write an email to vivianazareth05@gmail.com',
		llm=ChatGoogle(model='gemini-flash-latest'),
		tools=tools,
		browser_session=browser_session,
	)

	await agent.run()
	await browser_session.kill()

	input('Press Enter to close...')


if __name__ == '__main__':
	asyncio.run(main())