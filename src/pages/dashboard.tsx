import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { CreateContentModal } from '../components/ui/createContentModal'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Sidebar } from '../components/ui/sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(()=>{
    refresh();
  }, [modalOpen])

  return ( <div>
    <Sidebar />
    <div className='ml-72 p-4 min-h-screen bg-gray-100'>
        <CreateContentModal open={modalOpen} onClose = {() => {
          setModalOpen(false)
        }}/>
        <div className='flex gap-2 justify-end'>
          <Button onClick = {() => {(setModalOpen(true))}} startIcon={<PlusIcon size='md'/>} variant='primary' text='Add Content' size='md'/>
          <Button startIcon={<ShareIcon size='md' />} variant='secondary' text='Share Brain' size='md'/>
        </div>
      
        <div className='flex gap-4 flex-wrap'>
          {contents.map(({type, link, title}) => 
            <Card title={title} link={link} type={type}/>
          )}
          {/* <Card title="Technical blogs" link="https://x.com/eatonphil/status/1911042709504094547" type='twitter'/>*/}
          {/* <Card title="OpenSource Video" link="https://www.youtube.com/watch?v=TErgfUJMAY8" type="youtube"/>  */}
        </div>
        </div>
    </div>
  )
}