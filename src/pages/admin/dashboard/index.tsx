import AdminLayout from '@/components/components/Layout/Admin'
import { DashaboardContainer } from './styles'

export default function Dashboard() {
  return (
    <AdminLayout>
      <DashaboardContainer>
        <span>dashboard</span>
      </DashaboardContainer>
    </AdminLayout>
  )
}
