import fs from 'fs';
import matter from 'gray-matter';
import markdownToHtml from './markdownToHtmls';

export default function getAllMarkdownFiles(path){
    const files = fs.readdirSync(path);
    const results = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`${path}/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
            slug,
            frontmatter,
            content
        };
    });
    return results;
}

export async function getSingleMarkdownFiles(path){
    const readFile = fs.readFileSync(`${path}`, 'utf-8');
    const { data, content } = matter(readFile);
    return {
        frontmatter: data,
        content: content
    };
}