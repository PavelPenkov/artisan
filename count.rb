ARGF.each_line do |line|
  puts line.split('/')[-1]
end
