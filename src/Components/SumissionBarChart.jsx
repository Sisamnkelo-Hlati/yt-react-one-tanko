import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';



const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SumissionBarChart = () => {


  return (
    <div className= 'flex flex-col gap-2 h-full'>
        <div className='h-[30%] '>
            <div className='flex items-end justify-between w-full'>
            <div flex flex-col gap-1  >
                <div className='flex items-center gap-1'>
                    <MessageOutlinedIcon className='mr-1  '/>
                    <span className= ' font-bold text-sm uppercase'>Submissions</span>
                </div>
                <h1 className='font-bold text-2xl '>400</h1>
                <Link to= '/' className='text-sm text-[#009B00] hover:underline cursor-pointer'>
                    View All
                </Link>
            </div>
            <div >
                <div>
                   
                </div>
                <div className= 'flex flex-col items-center gap-1'>
                    <span className='text-sm text-green-500 font-bold'>85%</span>
                    <span className='text-[10px] text-gray-500 whitespace-nowrap font-bold'>this month</span>
                </div>
            </div>
            </div>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
             <ResponsiveContainer width="90%" height="90%">
                          <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={90}
          cy={50}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
            </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default SumissionBarChart
