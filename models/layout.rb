class Layout
  attr_accessor :frames

  def generate(src)
    frames.each do |frame|
      frame.generate
    end
  end
end
