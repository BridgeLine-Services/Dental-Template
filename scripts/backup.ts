import { execSync } from 'child_process'
import { mkdirSync, readdirSync, unlinkSync, existsSync } from 'fs'
import { join } from 'path'

const BACKUP_DIR = join(process.cwd(), 'backups')
const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) { console.error('DATABASE_URL not set'); process.exit(1) }

function backup() {
  if (!existsSync(BACKUP_DIR)) mkdirSync(BACKUP_DIR, { recursive: true })
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = `backup-${timestamp}.sql`
  const filepath = join(BACKUP_DIR, filename)
  console.log(`Creating backup: ${filename}`)
  execSync(`pg_dump "${DATABASE_URL}" -f "${filepath}"`)
  console.log(`Backup saved: ${filepath}`)
  const files = readdirSync(BACKUP_DIR).filter(f => f.startsWith('backup-')).sort().reverse()
  if (files.length > 7) files.slice(7).forEach(f => { unlinkSync(join(BACKUP_DIR, f)); console.log(`Deleted old: ${f}`) })
}

backup()
