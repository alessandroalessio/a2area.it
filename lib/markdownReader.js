import fs from 'fs';
import matter from 'gray-matter';

export default function getAllMarkdownFiles(path){
    const files = fs.readdirSync(path);
    const results = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`${path}/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });
    return results;
}