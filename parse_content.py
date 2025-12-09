
from bs4 import BeautifulSoup
import json
import re

def parse_html():
    with open('index.html', 'r') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. Skills
    skills = []
    for card in soup.select('.skill-card'):
        skill = {
            'id': card.get('data-skill'),
            'title': card.select_one('h4').text.strip(),
            'desc': card.select_one('p').text.strip()
        }
        icon_div = card.select_one('.icon')
        if icon_div.find('i'):
            skill['iconType'] = 'class'
            skill['icon'] = icon_div.find('i')['class']
        elif icon_div.find('img'):
            skill['iconType'] = 'image'
            skill['icon'] = icon_div.find('img')['src']
        skills.append(skill)

    # 2. Projects
    projects = []
    for card in soup.select('.project-card'):
        project = {
            'link': card.select_one('a')['href'],
            'image': card.select_one('.project-image img')['src'],
            'title': card.select_one('.project-title').text.strip(),
            'description': card.select_one('.project-description').text.strip(),
            'tech': [tag.text.strip() for tag in card.select('.tech-tag')],
            'buttons': []
        }
        for btn in card.select('.project-buttons a'):
            project['buttons'].append({
                'text': btn.text.strip(),
                'link': btn['href'],
                'icon': btn.find('i')['class'] if btn.find('i') else []
            })
        projects.append(project)

    # 3. Blog
    blogs = []
    for card in soup.select('.blog-card'):
        blogs.append({
            'date': card.select_one('.blog-date').text.strip(),
            'title': card.select_one('.blog-title').text.strip(),
            'excerpt': card.select_one('.blog-excerpt').text.strip(),
            'link': card.select_one('.read-more')['href']
        })

    # 4. Experience
    experience = []
    for item in soup.select('.timeline-item'):
        experience.append({
            'title': item.select_one('.job-title').text.strip(),
            'company': item.select_one('.company').text.strip(),
            'duration': item.select_one('.job-duration').text.strip(),
            'description': item.select_one('.job-description').decode_contents().strip()
        })

    # 5. Certificates
    certificates = []
    for card in soup.select('.certificate-card'):
        cert = {
            'link': card['href'],
            'title': card.select_one('.certificate-info h3').text.strip().replace('Certified', '').strip(),
            'certifiedTag': bool(card.select_one('.certified-tag')),
            'issuer': card.select_one('.certificate-issuer').text.strip(),
            'date': card.select_one('.certificate-date').text.strip(),
            'image': card.select_one('.certificate-image-container img')['src']
        }
        certificates.append(cert)

    # 6. Contact
    contacts = []
    for card in soup.select('.contact-grid a.contact-card'):
        contacts.append({
            'link': card['href'],
            'icon': card.select_one('.icon i')['class'],
            'title': card.select_one('h4').text.strip(),
            'desc': card.select_one('p').text.strip()
        })

    data = {
        'skills': skills,
        'projects': projects,
        'blogs': blogs,
        'experience': experience,
        'certificates': certificates,
        'contacts': contacts
    }

    print(json.dumps(data, indent=2))

if __name__ == "__main__":
    parse_html()
