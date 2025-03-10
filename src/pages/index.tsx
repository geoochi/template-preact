import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <p className='text-3xl'>template - vike@0.4.224 - react@19 - shadcn@canary - tailwindcss@4 - SSR/SSG</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <a href='/about'>→ About Page</a>
    </>
  )
}

export default Home
