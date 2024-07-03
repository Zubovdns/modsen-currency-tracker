import { ChartConfiguration, TooltipItem } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { DefaultTheme } from 'styled-components'
import { CustomDataPoint } from '../types'
import { mockData } from './mockData'
import { candlestick } from './plugins/candlestick'
import { crosshair } from './plugins/crosshair'

export const config = (theme: DefaultTheme): ChartConfiguration<'bar'> => ({
  type: 'bar',
  data: mockData,
  options: {
    layout: {
      padding: {
        right: 40,
      },
    },
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {
        type: 'timeseries',
        time: {
          unit: 'day',
          tooltipFormat: 'MMM d, yyyy',
        },
        title: {
          display: false,
          text: 'DAY',
          color: theme.chartTitleColor,
          align: 'end',
        },
        grid: {
          display: true,
          color: theme.chartGridColor,
        },
        ticks: {
          color: theme.chartTicksColor,
        },
      },
      y: {
        position: 'right',
        beginAtZero: true,
        grace: 1,
        title: {
          display: false,
          text: 'VALUE',
          color: theme.chartTitleColor,
          align: 'end',
        },
        grid: {
          color: theme.chartGridColor,
        },
        ticks: {
          color: theme.chartTicksColor,
          maxTicksLimit: 10,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          beforeBody: (ctx: TooltipItem<'bar'>[]) => [
            `O: ${(ctx[0].raw as CustomDataPoint).o.toFixed(2)}`,
            `H: ${(ctx[0].raw as CustomDataPoint).h.toFixed(2)}`,
            `L: ${(ctx[0].raw as CustomDataPoint).l.toFixed(2)}`,
            `C: ${(ctx[0].raw as CustomDataPoint).c.toFixed(2)}`,
          ],
          label: () => '',
        },
      },
    },
  },
  plugins: [candlestick, crosshair],
})
