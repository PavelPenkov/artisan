require './point'
require './frame'
require './layout'
require './generator'

f = ImageFrame.new
f.top_left = Point.new(10, 10)
f.bottom_right = Point.new(1500, 1500)
f.name = :title
l = Layout.new
l.frames = [f]
g = Generator.new(MiniMagick::Image.new('bg.jpg'), l, { title: {src: 'pic.png' }})
g.generate('/home/synapse/artisan.png')
