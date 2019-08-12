CPPFLAGS=
CFLAGS=-Wall
LDFLAGS=
cc=gcc

src=$(wildcard *.c)
obj=$(patsubst %.c,%.o,$(src))

target=test.cgi

$(target):$(obj)
	$(cc) $^ $(LDFLAGS) -o $@

%.o:%.c
	$(cc) $< $(CFLAGS) $(CPPFLAGS) -o $@

.PHONY:clean
clean:
	rm -f ./*.o 