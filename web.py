import requests
from bs4 import BeautifulSoup
import bs4
def getHtmlText(url):
    web_text = ''
    search = input('搜索内容')
    try:
        res = requests.get('https://so.csdn.net/so/search/s.do?q=%s&t=course&u=', search)
        res.raise_for_status()
        res.encoding = res.apparent_encoding
        return res.text
    except:
        print('')
def fillMsgList(Tlist,html):
    soup=BeautifulSoup(html,'lxml')
    for a in soup.find_all('div'):
      pass
    print(len(soup.find_all('div')))
def main():
    html=getHtmlText('null')
    fillMsgList('',html)

main()