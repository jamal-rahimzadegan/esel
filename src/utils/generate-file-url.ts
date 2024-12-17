export default function generateFileUrl(link: string, type: 'files' | 'icons'): string {
  const baseLink = type === 'files' ? process.env.NEXT_PUBLIC_FILES_URL : process.env.NEXT_PUBLIC_ICON_URL;
  return baseLink + link;
}
