import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Layers,
  Code, 
  Palette, 
  Box, 
  MonitorSmartphone,
  Globe,
  Settings,
  Upload
} from 'lucide-react';

const WebflowAgent = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [prompt, setPrompt] = useState('');

  const tabs = [
    { id: 'design', icon: Palette, label: 'Design System' },
    { id: 'components', icon: Box, label: 'Components' },
    { id: 'pages', icon: Layers, label: 'Pages' },
    { id: 'code', icon: Code, label: 'Export' }
  ];

  const componentTypes = [
    'Header', 'Hero Section', 'Feature Grid',
    'Testimonials', 'Pricing Table', 'Contact Form',
    'Footer', 'Blog Layout', 'Product Gallery'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r bg-gray-50 p-4">
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2 p-2 rounded-lg ${
                    activeTab === tab.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Component Library */}
            {activeTab === 'components' && (
              <div className="space-y-2">
                <h3 className="font-medium">Components</h3>
                <div className="space-y-1">
                  {componentTypes.map((comp, index) => (
                    <div
                      key={index}
                      className="p-2 bg-white rounded cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedComponents(prev => [...prev, comp])}
                    >
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="h-14 border-b flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <MonitorSmartphone className="w-5 h-5" />
              <select className="border rounded p-1">
                <option>Desktop</option>
                <option>Tablet</option>
                <option>Mobile</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Publish
              </button>
              <Settings className="w-5 h-5" />
            </div>
          </div>

          {/* Design Canvas */}
          <div className="p-6">
            <Card className="mb-6">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-medium">AI Design Assistant</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your website design needs..."
                    className="flex-1 p-2 border rounded"
                  />
                  <button className="px-4 py-2 bg-green-500 text-white rounded">
                    Generate
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Canvas Area */}
            <div className="border rounded-lg min-h-96 bg-gray-50 p-4">
              {selectedComponents.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Box className="w-12 h-12 mb-4" />
                  <p>Drag components or use AI to generate your design</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedComponents.map((comp, index) => (
                    <div key={index} className="p-4 bg-white rounded border">
                      {comp}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-64 border-l bg-gray-50 p-4">
          <h3 className="font-medium mb-4">Properties</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Layout</label>
              <select className="w-full border rounded p-1">
                <option>Flex</option>
                <option>Grid</option>
                <option>Block</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Spacing</label>
              <div className="grid grid-cols-2 gap-2">
                <input type="number" className="border rounded p-1" placeholder="X" />
                <input type="number" className="border rounded p-1" placeholder="Y" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Style</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-1 border rounded">Colors</button>
                <button className="p-1 border rounded">Typography</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebflowAgent;