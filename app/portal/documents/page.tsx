'use client'
import { useState } from 'react'
import { Upload, FileText, Download, Trash2 } from 'lucide-react'

interface DocItem {
  id: number
  name: string
  type: string
  size: string
  category: string
  date: string
}

export default function PortalDocuments() {
  const [docs, setDocs] = useState<DocItem[]>([
    { id: 1, name: 'Insurance Card Front.pdf', type: 'application/pdf', size: '245 KB', category: 'insurance', date: 'Aug 1, 2026' },
    { id: 2, name: 'Dental X-Ray.jpg', type: 'image/jpeg', size: '1.2 MB', category: 'xray', date: 'Jul 15, 2026' },
    { id: 3, name: 'Medical Records.pdf', type: 'application/pdf', size: '890 KB', category: 'medical', date: 'Jun 3, 2026' },
  ])
  const [dragActive, setDragActive] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const files = Array.from(e.dataTransfer.files)
    files.forEach((f: File) => setDocs((d: DocItem[]) => [...d, {
      id: Date.now() + Math.random(),
      name: f.name,
      type: f.type,
      size: `${(f.size / 1024).toFixed(0)} KB`,
      category: 'general',
      date: 'Today',
    }]))
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">My Documents</h1>
        <p className="text-slate-600 mb-8">Securely upload and manage your dental documents.</p>
        
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-2xl p-8 text-center mb-8 transition-colors ${dragActive ? 'border-brand-500 bg-brand-50' : 'border-slate-300 bg-white'}`}
        >
          <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium mb-1">Drag & drop files here, or click to browse</p>
          <p className="text-sm text-slate-400">PDF, JPEG, PNG up to 10MB</p>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            id="file-upload"
            onChange={(e) => {
              const files = Array.from(e.target.files || [])
              files.forEach((f: File) => setDocs((d: DocItem[]) => [...d, {
                id: Date.now() + Math.random(),
                name: f.name,
                type: f.type,
                size: `${(f.size / 1024).toFixed(0)} KB`,
                category: 'general',
                date: 'Today',
              }]))
            }}
          />
          <label htmlFor="file-upload" className="inline-block mt-4 bg-brand-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-brand-500 cursor-pointer">Choose Files</label>
        </div>

        <div className="space-y-3">
          {docs.map((doc: DocItem) => (
            <div key={doc.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
              <FileText className="w-8 h-8 text-brand-500" />
              <div className="flex-grow">
                <p className="font-medium text-slate-900">{doc.name}</p>
                <p className="text-xs text-slate-500">{doc.category} • {doc.size} • {doc.date}</p>
              </div>
              <button className="text-slate-400 hover:text-brand-600"><Download className="w-5 h-5" /></button>
              <button onClick={() => setDocs((d: DocItem[]) => d.filter((x: DocItem) => x.id !== doc.id))} className="text-slate-400 hover:text-red-500"><Trash2 className="w-5 h-5" /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
