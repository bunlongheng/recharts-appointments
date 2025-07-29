import React from 'react';
import {
  BarChart, LineChart, PieChart, RadarChart, AreaChart, ComposedChart, ScatterChart, Treemap, FunnelChart,
  XAxis, YAxis, ZAxis, Tooltip, Legend, Bar, Line, Pie, Radar, PolarGrid, PolarAngleAxis,
  Area, CartesianGrid, ResponsiveContainer, Scatter, Funnel, LabelList, RadialBarChart, RadialBar, ErrorBar, Brush,
  Cell
} from 'recharts';

const appointmentData = [
  { name: 'Mon', completed: 45, scheduled: 52, cancelled: 8, rescheduled: 5 },
  { name: 'Tue', completed: 38, scheduled: 48, cancelled: 6, rescheduled: 4 },
  { name: 'Wed', completed: 52, scheduled: 58, cancelled: 10, rescheduled: 6 },
  { name: 'Thu', completed: 41, scheduled: 47, cancelled: 5, rescheduled: 3 },
  { name: 'Fri', completed: 36, scheduled: 42, cancelled: 7, rescheduled: 4 },
  { name: 'Sat', completed: 28, scheduled: 35, cancelled: 4, rescheduled: 2 },
  { name: 'Sun', completed: 15, scheduled: 18, cancelled: 2, rescheduled: 1 },
];

const staffPerformanceData = [
  { name: 'Dr. Sarah', appointments: 85, revenue: 4200, satisfaction: 4.8 },
  { name: 'Dr. Mike', appointments: 72, revenue: 3800, satisfaction: 4.6 },
  { name: 'Dr. Lisa', appointments: 68, revenue: 3500, satisfaction: 4.9 },
  { name: 'Dr. John', appointments: 54, revenue: 2900, satisfaction: 4.4 },
  { name: 'Dr. Emma', appointments: 49, revenue: 2600, satisfaction: 4.7 },
  { name: 'Dr. Alex', appointments: 43, revenue: 2200, satisfaction: 4.5 },
];

const appointmentTypesData = [
  { type: 'Consultation', count: 145, color: '#3B82F6' },
  { type: 'Follow-up', count: 98, color: '#10B981' },
  { type: 'Emergency', count: 32, color: '#EF4444' },
  { type: 'Routine Check', count: 76, color: '#F59E0B' },
  { type: 'Treatment', count: 54, color: '#8B5CF6' },
  { type: 'Surgery', count: 23, color: '#F97316' },
];

const monthlyRevenueData = [
  { month: 'Jan', revenue: 28500, appointments: 340, avgValue: 84 },
  { month: 'Feb', revenue: 31200, appointments: 365, avgValue: 85 },
  { month: 'Mar', revenue: 29800, appointments: 358, avgValue: 83 },
  { month: 'Apr', revenue: 33100, appointments: 385, avgValue: 86 },
  { month: 'May', revenue: 35600, appointments: 410, avgValue: 87 },
  { month: 'Jun', revenue: 32400, appointments: 378, avgValue: 86 },
  { month: 'Jul', revenue: 34900, appointments: 398, avgValue: 88 },
];

const appointmentStatusData = [
  { status: 'Completed', value: 245, color: '#10B981' },
  { status: 'Scheduled', value: 68, color: '#3B82F6' },
  { status: 'Cancelled', value: 28, color: '#EF4444' },
  { status: 'No-Show', value: 15, color: '#F59E0B' },
  { status: 'Rescheduled', value: 22, color: '#8B5CF6' },
];

const timeSlotData = [
  { time: '9AM', bookings: 12, capacity: 15 },
  { time: '10AM', bookings: 15, capacity: 15 },
  { time: '11AM', bookings: 14, capacity: 15 },
  { time: '12PM', bookings: 8, capacity: 15 },
  { time: '1PM', bookings: 6, capacity: 15 },
  { time: '2PM', bookings: 13, capacity: 15 },
  { time: '3PM', bookings: 15, capacity: 15 },
  { time: '4PM', bookings: 12, capacity: 15 },
];

const customerSatisfactionData = [
  { metric: 'Service Quality', score: 4.6, maxScore: 5 },
  { metric: 'Wait Time', score: 4.2, maxScore: 5 },
  { metric: 'Staff Friendliness', score: 4.8, maxScore: 5 },
  { metric: 'Cleanliness', score: 4.7, maxScore: 5 },
  { metric: 'Booking Process', score: 4.4, maxScore: 5 },
  { metric: 'Overall Experience', score: 4.5, maxScore: 5 },
];

const departmentData = [
  { department: 'General', size: 180, revenue: 15400 },
  { department: 'Cardiology', size: 95, revenue: 28500 },
  { department: 'Pediatrics', size: 125, revenue: 12800 },
  { department: 'Orthopedics', size: 78, revenue: 22300 },
  { department: 'Dermatology', size: 65, revenue: 8900 },
  { department: 'Neurology', size: 45, revenue: 18700 },
];

const waitTimeData = [
  { day: 'Mon', avgWait: 15, target: 12 },
  { day: 'Tue', avgWait: 18, target: 12 },
  { day: 'Wed', avgWait: 22, target: 12 },
  { day: 'Thu', avgWait: 16, target: 12 },
  { day: 'Fri', avgWait: 20, target: 12 },
  { day: 'Sat', avgWait: 14, target: 12 },
  { day: 'Sun', avgWait: 11, target: 12 },
];

const patientDemographicsData = [
  { ageGroup: '0-18', patients: 85, percentage: 22 },
  { ageGroup: '19-35', patients: 95, percentage: 25 },
  { ageGroup: '36-50', patients: 112, percentage: 29 },
  { ageGroup: '51-65', patients: 68, percentage: 18 },
  { ageGroup: '65+', patients: 24, percentage: 6 },
];

const quarterlyFinancialData = [
  { quarter: 'Q1', profit: 45000, expenses: 32000, net: 13000 },
  { quarter: 'Q2', profit: 52000, expenses: 35000, net: 17000 },
  { quarter: 'Q3', profit: 48000, expenses: 33000, net: 15000 },
  { quarter: 'Q4', profit: 58000, expenses: 38000, net: 20000 },
];

const donutColors = ['#3B82F6', '#10B981', '#EF4444', '#F59E0B', '#8B5CF6', '#F97316', '#06B6D4'];

const ChartWrapper = ({ title, children }) => (
  <div style={{
    background: 'white',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    height: '380px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e2e8f0'
  }}>
    <h3 style={{
      margin: '0 0 20px 0',
      fontSize: '16px',
      fontWeight: '600',
      color: '#2d3748',
      textAlign: 'center'
    }}>{title}</h3>
    <div style={{ flex: 1, minHeight: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          color: '#2d3748',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>📊 Recharts Showcase - 18 Chart Types</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b'
          }}>Complete collection of interactive data visualizations</p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '25px'
        }}>
          <ChartWrapper title="1. Daily Appointments">
            <BarChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10B981" />
            </BarChart>
          </ChartWrapper>

          <ChartWrapper title="2. Appointment Trends (Completed vs Cancelled)">
            <LineChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={3} name="Completed" />
              <Line type="monotone" dataKey="cancelled" stroke="#EF4444" strokeWidth={3} name="Cancelled" />
            </LineChart>
          </ChartWrapper>

          <ChartWrapper title="3. Monthly Revenue Trend">
            <AreaChart data={monthlyRevenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="url(#revenueGradient)" />
            </AreaChart>
          </ChartWrapper>

          <ChartWrapper title="4. Appointment Status Distribution">
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie 
                data={appointmentStatusData} 
                dataKey="value" 
                nameKey="status" 
                cx="50%" 
                cy="50%" 
                outerRadius={80} 
                label
              >
                {appointmentStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartWrapper>

          <ChartWrapper title="5. Staff Performance Radar">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={customerSatisfactionData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <Tooltip />
              <Radar name="Score" dataKey="score" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
            </RadarChart>
          </ChartWrapper>

          <ChartWrapper title="6. Revenue vs Appointments vs Wait Time">
            <ComposedChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="scheduled" fill="#E0E7FF" stroke="#6366F1" />
              <Bar dataKey="completed" barSize={20} fill="#10B981" />
              <Line type="monotone" dataKey="cancelled" stroke="#EF4444" strokeWidth={2} />
            </ComposedChart>
          </ChartWrapper>

          <ChartWrapper title="7. Staff Performance Scatter">
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="appointments" name="Appointments" />
              <YAxis dataKey="satisfaction" name="Rating" />
              <ZAxis dataKey="revenue" range={[60, 400]} />
              <Tooltip />
              <Scatter data={staffPerformanceData} fill="#F59E0B" name="Staff Performance" />
            </ScatterChart>
          </ChartWrapper>

          <ChartWrapper title="8. Department Revenue Treemap">
            <Treemap 
              width={400} 
              height={200} 
              data={departmentData} 
              dataKey="revenue" 
              ratio={4 / 3} 
              stroke="#fff" 
              fill="#06B6D4" 
            />
          </ChartWrapper>

          <ChartWrapper title="9. Patient Conversion Funnel">
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="count" data={[
                { name: 'Inquiries', count: 500 },
                { name: 'Appointments', count: 380 },
                { name: 'Completed', count: 245 },
                { name: 'Follow-ups', count: 98 }
              ]} isAnimationActive label>
                <LabelList position="center" fill="#fff" stroke="none" dataKey="name" />
              </Funnel>
            </FunnelChart>
          </ChartWrapper>

          <ChartWrapper title="10. Time Slot Utilization">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="20%" 
              outerRadius="90%" 
              barSize={10} 
              data={timeSlotData.map(item => ({...item, utilization: (item.bookings/item.capacity) * 100}))} 
              startAngle={180} 
              endAngle={0}
            >
              <RadialBar minAngle={15} label background clockWise dataKey="utilization" fill="#F59E0B" />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ChartWrapper>

          <ChartWrapper title="11. Weekly Appointments with Filter">
            <BarChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="scheduled" fill="#3B82F6" />
              <Brush dataKey="name" height={20} stroke="#3B82F6" />
            </BarChart>
          </ChartWrapper>

          <ChartWrapper title="12. Patient Satisfaction Trend">
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="avgValue" stroke="#10B981" dot={{ r: 6 }} strokeWidth={2} />
            </LineChart>
          </ChartWrapper>

          <ChartWrapper title="13. Appointment Types (Stacked)">
            <BarChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#10B981" />
              <Bar dataKey="cancelled" stackId="a" fill="#EF4444" />
            </BarChart>
          </ChartWrapper>

          <ChartWrapper title="14. Patient Demographics Donut">
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie 
                data={patientDemographicsData} 
                dataKey="patients" 
                nameKey="ageGroup"
                cx="50%" 
                cy="50%" 
                innerRadius={30} 
                outerRadius={60} 
                label
              >
                {patientDemographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={donutColors[index % donutColors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ChartWrapper>

          <ChartWrapper title="15. Revenue Growth Area">
            <AreaChart data={monthlyRevenueData}>
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="url(#profitGradient)" />
            </AreaChart>
          </ChartWrapper>

          <ChartWrapper title="16. Wait Time Analysis with Error Bars">
            <BarChart data={waitTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgWait" fill="#F59E0B" name="Avg Wait Time">
              </Bar>
              <Bar dataKey="target" fill="#10B981" name="Target" />
            </BarChart>
          </ChartWrapper>

          <ChartWrapper title="17. Staff Efficiency Scatter">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="appointments" />
              <YAxis type="number" dataKey="revenue" />
              <Tooltip />
              <Legend />
              <Scatter data={staffPerformanceData} fill="#8B5CF6" name="Staff Performance" shape="circle" />
            </ScatterChart>
          </ChartWrapper>

          <ChartWrapper title="18. Quarterly P&L (Green/Red)">
            <ComposedChart data={quarterlyFinancialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="profit" fill="#10B981" name="Profit" />
              <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
              <Line type="monotone" dataKey="net" stroke="#059669" strokeWidth={3} name="Net Profit" />
            </ComposedChart>
          </ChartWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;